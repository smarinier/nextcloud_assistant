<?php

namespace OCA\TpAssistant\Listener;

use OCA\TpAssistant\AppInfo\Application;
use OCA\TpAssistant\Db\MetaTaskMapper;
use OCA\TpAssistant\Event\BeforeAssistantNotificationEvent;
use OCA\TpAssistant\Service\NotificationService;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\EventDispatcher\IEventListener;
use OCP\TextProcessing\Events\TaskSuccessfulEvent;

/**
 * @template-implements IEventListener<Event>
 */
class TaskSuccessfulListener implements IEventListener {

	public function __construct(
		private NotificationService $notificationService,
		private IEventDispatcher $eventDispatcher,
		private MetaTaskMapper $metaTaskMapper,
	) {
	}

	public function handle(Event $event): void {
		if (!$event instanceof TaskSuccessfulEvent) {
			return;
		}

		$task = $event->getTask();
		error_log('Task successful ' . $task->getId());
		if ($task->getUserId() === null) {
			return;
		}

		$notificationTarget = null;
		$notificationActionLabel = null;

		// we dispatch an event to ask the app that scheduled the task if it wants a notification
		// and what the target should be
		if ($task->getAppId() !== Application::APP_ID) {
			$beforeAssistantNotificationEvent = new BeforeAssistantNotificationEvent($task);
			$this->eventDispatcher->dispatchTyped($beforeAssistantNotificationEvent);
			if (!$beforeAssistantNotificationEvent->getWantsNotification()) {
				return;
			}
			$notificationTarget = $beforeAssistantNotificationEvent->getNotificationTarget();
			$notificationActionLabel = $beforeAssistantNotificationEvent->getNotificationActionLabel();
		}

		try {
			$assistantTask = $this->metaTaskMapper->getMetaTaskByOcpTaskIdAndCategory($task->getId(), Application::TASK_CATEGORY_TEXT_GEN);
		} catch (DoesNotExistException $e) {
			// Not an assistant task
			return;
		}

		// Update task status and output:
		$assistantTask->setStatus(Application::TP_STATUS_TO_META_STATUS[$task->getStatus()]);
		$assistantTask->setOutput($task->getOutput());
		$assistantTask = $this->metaTaskMapper->update($assistantTask);

		$this->notificationService->sendNotification($assistantTask, $notificationTarget, $notificationActionLabel);
	}
}
