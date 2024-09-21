OC.L10N.register(
    "assistant",
    {
    "Failed to notify when ready; unknown user" : "Failed to notify when ready; unknown user",
    "User not logged in" : "User not logged in",
    "User not found" : "User not found",
    "Failed to create a chat session" : "Failed to create a chat session",
    "Failed to update the chat session" : "Failed to update the chat session",
    "Failed to delete the chat session" : "Failed to delete the chat session",
    "Failed to get chat sessions" : "Failed to get chat sessions",
    "Session not found" : "Session not found",
    "Message content is empty" : "Message content is empty",
    "Failed to add a chat message" : "Failed to add a chat message",
    "Failed to get chat messages" : "Failed to get chat messages",
    "Failed to delete a chat message" : "Failed to delete a chat message",
    "Failed to delete the last message" : "Failed to delete the last message",
    "Failed to add a chat message into DB" : "Failed to add a chat message into DB",
    "Failed to generate a title for the chat session" : "Failed to generate a title for the chat session",
    "Nextcloud Assistant" : "Nextcloud Assistant",
    "Assistant task" : "Assistant task",
    "AI text generation" : "AI text generation",
    "AI image generation" : "AI image generation",
    "AI audio transcription" : "AI audio transcription",
    "AI context writer" : "AI context writer",
    "Writing style: %1$s; Source material: %2$s" : "Writing style: %1$s; Source material: %2$s",
    "Task for \"%1$s\" has finished" : "Task for \"%1$s\" has finished",
    "\"%1$s\" task for \"%2$s\" has finished" : "\"%1$s\" task for \"%2$s\" has finished",
    "Input: %1$s" : "Input: %1$s",
    "Result: %1$s" : "Result: %1$s",
    "View results" : "View results",
    "Task for \"%1$s\" has failed" : "Task for \"%1$s\" has failed",
    "\"%1$s\" task for \"%2$s\" has failed" : "\"%1$s\" task for \"%2$s\" has failed",
    "View task" : "View task",
    "Generate text" : "Generate text",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague.",
    "Chat with AI" : "Chat with AI",
    "Chat with an AI model." : "Chat with an AI model.",
    "Artificial Intelligence" : "Artificial Intelligence",
    "Process and transform text" : "Process and transform text",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Local Large language model](https://github.com/nextcloud/llm2#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)\n\nMore details on how to set this up in the [admin docs](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)" : "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Local Large language model](https://github.com/nextcloud/llm2#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)\n\nMore details on how to set this up in the [admin docs](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)",
    "Find more details on how to set up Assistant and recommended backends in the Administration documentation." : "Find more details on how to set up Assistant and recommended backends in the Administration documentation.",
    "Select which features you want to enable" : "Select which features you want to enable",
    "Top-right assistant" : "Top-right assistant",
    "To be able to use this feature, please install at least one AI text processing provider." : "To be able to use this feature, please install at least one AI text processing provider.",
    "AI text generation smart picker" : "AI text generation smart picker",
    "To enable this feature, please install an AI text processing provider for the free prompt task type:" : "To enable this feature, please install an AI text processing provider for the free prompt task type:",
    "Text-to-image smart picker" : "Text-to-image smart picker",
    "To enable this feature, please install a text-to-image provider:" : "To enable this feature, please install a text-to-image provider:",
    "Speech-to-text smart picker" : "Speech-to-text smart picker",
    "To enable this feature, please install a speech-to-text provider:" : "To enable this feature, please install a speech-to-text provider:",
    "Chat User Instructions for Chat Completions" : "Chat User Instructions for Chat Completions",
    "It is passed on to the LLM for it to better understand the context." : "It is passed on to the LLM for it to better understand the context.",
    "\"{user}\" is a placeholder for the user's display name." : "\"{user}\" is a placeholder for the user's display name.",
    "Chat User Instructions for Title Generation" : "Chat User Instructions for Title Generation",
    "It is passed on to the LLMs to let it know what to do" : "It is passed on to the LLMs to let it know what to do",
    "\"{user}\" is a placeholder for the user's display name here as well." : "\"{user}\" is a placeholder for the user's display name here as well.",
    "Last N messages to consider for chat completions" : "Last N messages to consider for chat completions",
    "Number of messages to consider for chat completions (excluding the user instructions, which is always considered)" : "Number of messages to consider for chat completions (excluding the user instructions, which is always considered)",
    "Assistant admin options saved" : "Assistant admin options saved",
    "Failed to save assistant admin options" : "Failed to save assistant admin options",
    "The task ran successfully but the result is identical to the input." : "The task ran successfully but the result is identical to the input.",
    "This output was generated by AI. Make sure to double-check and adjust." : "This output was generated by AI. Make sure to double-check and adjust.",
    "Back to the assistant" : "Back to the assistant",
    "Previous \"{taskTypeName}\" tasks" : "Previous \"{taskTypeName}\" tasks",
    "Show previous tasks" : "Show previous tasks",
    "Hide advanced options" : "Hide advanced options",
    "Show advanced options" : "Show advanced options",
    "Try again" : "Try again",
    "Send request" : "Send request",
    "Launch this task again" : "Launch this task again",
    "Launch a task" : "Launch a task",
    "Generate a first draft for a blog post about privacy" : "Generate a first draft for a blog post about privacy",
    "What is the venue for the team retreat this quarter?" : "What is the venue for the team retreat this quarter?",
    "Type or paste the text to summarize" : "Type or paste the text to summarize",
    "Type or paste the text to generate a headline for" : "Type or paste the text to generate a headline for",
    "Type or paste the text to extract the topics from" : "Type or paste the text to extract the topics from",
    "landscape trees forest peaceful" : "landscape trees forest peaceful",
    "a number" : "a number",
    "Shakespeare or an example of the style" : "Shakespeare or an example of the style",
    "A description of what you need or some original content" : "A description of what you need or some original content",
    "Close" : "Close",
    "Close Nextcloud Assistant" : "Close Nextcloud Assistant",
    "New conversation" : "New conversation",
    "No conversations yet" : "No conversations yet",
    "Delete" : "Delete",
    "Conversation title" : "Conversation title",
    "Edit title" : "Edit title",
    "Generate title" : "Generate title",
    "Creating a new conversation" : "Creating a new conversation",
    "Hello there! What can I help you with today?" : "Hello there! What can I help you with today?",
    "Try sending a message to spark a conversation." : "Try sending a message to spark a conversation.",
    "Load older messages" : "Load older messages",
    "Retry response generation" : "Retry response generation",
    "Error updating title of conversation" : "Error updating title of conversation",
    "Untitled conversation" : "Untitled conversation",
    "Error generating a title for the conversation" : "Error generating a title for the conversation",
    "Error deleting conversation" : "Error deleting conversation",
    "Error fetching conversations" : "Error fetching conversations",
    "Error deleting message" : "Error deleting message",
    "Error fetching messages" : "Error fetching messages",
    "Error creating a new message" : "Error creating a new message",
    "Invalid response received for a new conversation request" : "Invalid response received for a new conversation request",
    "Error creating a new conversation" : "Error creating a new conversation",
    "Error generating a response" : "Error generating a response",
    "Error regenerating a response" : "Error regenerating a response",
    "Error loading messages" : "Error loading messages",
    "The text must be shorter than or equal to {maxLength} characters, currently {length}" : "The text must be shorter than or equal to {maxLength} characters, currently {length}",
    "Cancel editing" : "Cancel editing",
    "Submit" : "Submit",
    "You" : "You",
    "Message copied to clipboard" : "Message copied to clipboard",
    "Copy message" : "Copy message",
    "Regenerate message" : "Regenerate message",
    "Delete message" : "Delete message",
    "Selective context" : "Selective context",
    "Select Files/Folders" : "Select Files/Folders",
    "Select Providers" : "Select Providers",
    "Choose Files/Folders" : "Choose Files/Folders",
    "Choose" : "Choose",
    "Clear Selection" : "Clear Selection",
    "Error fetching default provider key" : "Error fetching default provider key",
    "Error fetching providers" : "Error fetching providers",
    "No sources referenced" : "No sources referenced",
    "No provider found" : "No provider found",
    "AI Providers need to be installed to use the Assistant" : "AI Providers need to be installed to use the Assistant",
    "tool" : "tool",
    "integration" : "integration",
    "complete AI documentation" : "complete AI documentation",
    "AI provider apps can be found in the {toolLink} and {integrationLink} app settings sections." : "AI provider apps can be found in the {toolLink} and {integrationLink} app settings sections.",
    "You can also check the {aiAdminDocLink}" : "You can also check the {aiAdminDocLink}",
    "AI image generation smart picker" : "AI image generation smart picker",
    "AI transcription smart picker" : "AI transcription smart picker",
    "No suitable providers are available. They must first be enabled by your administrator." : "No suitable providers are available. They must first be enabled by your administrator.",
    "Assistant options saved" : "Assistant options saved",
    "Failed to save assistant options" : "Failed to save assistant options",
    "Getting results…" : "Getting results…",
    "Run in the background and get notified" : "Run in the background and get notified",
    "Cancel" : "Cancel",
    "You will receive a notification when it has finished" : "You will receive a notification when it has finished",
    "Your task has been scheduled" : "Your task has been scheduled",
    "Nothing yet" : "Nothing yet",
    "You have not submitted any \"{taskTypeName}\" task yet" : "You have not submitted any \"{taskTypeName}\" task yet",
    "Succeeded" : "Succeeded",
    "Cancelled" : "Cancelled",
    "Failed" : "Failed",
    "Running" : "Running",
    "Scheduled" : "Scheduled",
    "Input" : "Input",
    "Result" : "Result",
    "This task is scheduled" : "This task is scheduled",
    "Unknown status" : "Unknown status",
    "_{n} image has been generated_::_{n} images have been generated_" : ["{n} image has been generated","{n} images have been generated"],
    "_Generation of {n} image is scheduled_::_Generation of {n} images is scheduled_" : ["Generation of {n} image is scheduled","Generation of {n} images is scheduled"],
    "Start recording" : "Start recording",
    "Stop recording" : "Stop recording",
    "Dismiss recording" : "Dismiss recording",
    "End recording and send" : "End recording and send",
    "Choose file" : "Choose file",
    "Choose a file" : "Choose a file",
    "No file selected" : "No file selected",
    "Choose a value" : "Choose a value",
    "Upload from device" : "Upload from device",
    "Select from Nextcloud" : "Select from Nextcloud",
    "Pick one or multiple files" : "Pick one or multiple files",
    "Remove this media" : "Remove this media",
    "Download this media" : "Download this media",
    "Share this media" : "Share this media",
    "Share" : "Share",
    "Could not upload the recorded file" : "Could not upload the recorded file",
    "Output file share link copied to clipboard" : "Output file share link copied to clipboard",
    "Could not copy to clipboard" : "Could not copy to clipboard",
    "Pick a file" : "Pick a file",
    "Clear value" : "Clear value",
    "Type some number" : "Type some number",
    "The current value is not a number" : "The current value is not a number",
    "Advanced" : "Advanced",
    "Copy output" : "Copy output",
    "Copy" : "Copy",
    "Choose a text file" : "Choose a text file",
    "Unexpected response from text parser" : "Unexpected response from text parser",
    "Could not parse file" : "Could not parse file",
    "Result could not be copied to clipboard" : "Result could not be copied to clipboard",
    "Upload file" : "Upload file",
    "Could not upload the file" : "Could not upload the file",
    "Could not upload the files" : "Could not upload the files",
    "Your task has failed" : "Your task has failed",
    "Failed to schedule your task" : "Failed to schedule your task",
    "Submit the current task's result" : "Submit the current task's result",
    "Assistant error" : "Assistant error",
    "Please log in to view the task result" : "Please log in to view the task result",
    "This task does not exist or has been cleaned up" : "This task does not exist or has been cleaned up",
    "Failed to schedule the task" : "Failed to schedule the task",
    "Failed to get the last message" : "Failed to get the last message",
    "Failed to process prompt; unknown user" : "Failed to process prompt; unknown user",
    "Failed to get prompt history; unknown user" : "Failed to get prompt history; unknown user",
    "Failed to get outputs; unknown user" : "Failed to get outputs; unknown user",
    "Failed to cancel generation; unknown user" : "Failed to cancel generation; unknown user",
    "Some internal error occurred. Contact your sysadmin for more info." : "Some internal error occurred. Contact your sysadmin for more info.",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "No Speech-to-Text provider found, install one from the app store to use this feature.",
    "Audio file not found." : "Audio file not found.",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "No permission to create recording file/directory, contact your sysadmin to resolve this issue.",
    "Failed to set visibility of image files; unknown user" : "Failed to set visibility of image files; unknown user",
    "Unknown error while retrieving prompt history." : "Unknown error while retrieving prompt history.",
    "Context write" : "Context write",
    "Writes text in a given style based on the provided source material." : "Writes text in a given style based on the provided source material.",
    "Transcribe" : "Transcribe",
    "Transcribe audio to text" : "Transcribe audio to text",
    "Generate image" : "Generate image",
    "Generate an image from a text" : "Generate an image from a text",
    "Canceled by user" : "Canceled by user",
    "FreePromptTaskType not available" : "FreePromptTaskType not available",
    "Failed to run or schedule a task" : "Failed to run or schedule a task",
    "Failed to get prompt history" : "Failed to get prompt history",
    "Generation not found" : "Generation not found",
    "Multiple tasks found" : "Multiple tasks found",
    "Transcript not found" : "Transcript not found",
    "No text to image processing provider available" : "No text to image processing provider available",
    "Image request error" : "Image request error",
    "Image generation not found." : "Image generation not found.",
    "Retrieving the image generation failed." : "Retrieving the image generation failed.",
    "Image generation failed." : "Image generation failed.",
    "Image file names could not be fetched from database" : "Image file names could not be fetched from database",
    "Image file not found in database" : "Image file not found in database",
    "Image file not found" : "Image file not found",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)" : "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "To enable this feature, please install an AI text processing provider for the free prompt task type.",
    "To enable this feature, please install a text-to-image provider." : "To enable this feature, please install a text-to-image provider.",
    "To enable this feature, please install a speech-to-text provider." : "To enable this feature, please install a speech-to-text provider.",
    "Image storage" : "Image storage",
    "Image generation idle time (days)" : "Image generation idle time (days)",
    "Days until generated images are deleted if they are not viewed" : "Days until generated images are deleted if they are not viewed",
    " This includes the user instructions and the LLM's messages" : " This includes the user instructions and the LLM's messages",
    "Writing style" : "Writing style",
    "Describe the writing style you want to use or supply an example document." : "Describe the writing style you want to use or supply an example document.",
    "Source material" : "Source material",
    "Describe what you want the document to be written on." : "Describe what you want the document to be written on.",
    "Type some text" : "Type some text",
    "Output" : "Output",
    "Copy output text to clipboard" : "Copy output text to clipboard",
    "Reset the output value to the originally generated one" : "Reset the output value to the originally generated one",
    "Reset" : "Reset",
    "Text Generation" : "Text Generation",
    "Audio transcription" : "Audio transcription",
    "Unknown Result Type" : "Unknown Result Type",
    "The task ran successfully but the generated text is empty." : "The task ran successfully but the generated text is empty.",
    "Run a task" : "Run a task",
    "Loading conversations..." : "Loading conversations...",
    "Edit Title" : "Edit Title",
    "Generate Title" : "Generate Title",
    "Loading messages..." : "Loading messages...",
    "Type a message..." : "Type a message...",
    "Thinking..." : "Thinking...",
    "Text generation content" : "Text generation content",
    "The text generation task was scheduled to run in the background." : "The text generation task was scheduled to run in the background.",
    "Estimated completion time: " : "Estimated completion time: ",
    "This can take a while…" : "This can take a while…",
    "Some generations are still being processed in the background! Showing finished generations." : "Some generations are still being processed in the background! Showing finished generations.",
    "Loading generations…" : "Loading generations…",
    "Include prompt in the final result" : "Include prompt in the final result",
    "Unexpected server response" : "Unexpected server response",
    "The processing of generations failed." : "The processing of generations failed.",
    "The processing of some generations failed." : "The processing of some generations failed.",
    "Text generation error" : "Text generation error",
    "Unknown text generation API error" : "Unknown text generation API error",
    "Prompt" : "Prompt",
    "Result {index}" : "Result {index}",
    "Run in the background" : "Run in the background",
    "Record Audio" : "Record Audio",
    "Choose Audio File" : "Choose Audio File",
    "Reset recorded audio" : "Reset recorded audio",
    "No audio file selected" : "No audio file selected",
    "Selected Audio File:" : "Selected Audio File:",
    "Choose audio file in your storage" : "Choose audio file in your storage",
    "Choose audio File" : "Choose audio File",
    "Copy result" : "Copy result",
    "Audio input" : "Audio input",
    "Unknown input" : "Unknown input",
    "Running…" : "Running…",
    "Unknown error" : "Unknown error",
    "Task result was copied to clipboard" : "Task result was copied to clipboard",
    "Image generation" : "Image generation",
    "Edit visible images" : "Edit visible images",
    "Click to toggle generation visibility" : "Click to toggle generation visibility",
    "Generated image" : "Generated image",
    "This generation has no visible images" : "This generation has no visible images",
    "Estimated generation time left: " : "Estimated generation time left: ",
    "The image(s) will be displayed here once generated." : "The image(s) will be displayed here once generated.",
    "This image generation was scheduled to run in the background." : "This image generation was scheduled to run in the background.",
    "Image generation failed" : "Image generation failed",
    "Rate limit reached. Please try again later." : "Rate limit reached. Please try again later.",
    "Unknown server query error" : "Unknown server query error",
    "Failed to get images" : "Failed to get images",
    "Include the prompt in the result" : "Include the prompt in the result",
    "Number of results" : "Number of results",
    "Enter your question or task here:" : "Enter your question or task here:",
    "Preview text generation by AI" : "Preview text generation by AI",
    "Notify when ready" : "Notify when ready",
    "Submit text generated by AI" : "Submit text generated by AI",
    "Regenerate" : "Regenerate",
    "Preview" : "Preview",
    "You will be notified when the text generation is ready." : "You will be notified when the text generation is ready.",
    "Notify when ready error" : "Notify when ready error",
    "Unknown notify when ready error" : "Unknown notify when ready error",
    "The task could not be found. It may have been deleted." : "The task could not be found. It may have been deleted.",
    "Schedule Transcription" : "Schedule Transcription",
    "Successfully scheduled transcription" : "Successfully scheduled transcription",
    "Failed to schedule transcription" : "Failed to schedule transcription",
    "Unknown API error" : "Unknown API error",
    "Preview image generation by AI" : "Preview image generation by AI",
    "Submit image(s) generated by AI" : "Submit image(s) generated by AI",
    "Send" : "Send",
    "Show/hide advanced options" : "Show/hide advanced options",
    "Advanced options" : "Advanced options",
    "A description of the image you want to generate" : "A description of the image you want to generate",
    "Image generation cancel error" : "Image generation cancel error",
    "Unknown image generation cancel error" : "Unknown image generation cancel error",
    "Unexpected response from server." : "Unexpected response from server.",
    "Image generation error" : "Image generation error",
    "Unknown image generation error" : "Unknown image generation error",
    "You will be notified when the image generation is ready." : "You will be notified when the image generation is ready.",
    "Copy the link to this generation to clipboard" : "Copy the link to this generation to clipboard",
    "Copy link to clipboard" : "Copy link to clipboard",
    "Image link copied to clipboard" : "Image link copied to clipboard",
    "Image link could not be copied to clipboard" : "Image link could not be copied to clipboard"
},
"nplurals=2; plural=(n != 1);");
