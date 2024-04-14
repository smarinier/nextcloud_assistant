OC.L10N.register(
    "assistant",
    {
    "Failed to process prompt; unknown user" : "Fehler beim Verarbeiten der Eingabe; Unbekannter Benutzer",
    "Failed to get prompt history; unknown user" : "Eingabe-History konnte nicht abgerufen werden; unbekannter Benutzer",
    "Failed to get outputs; unknown user" : "Fehler beim Abrufen der Ausgabe; unbekannter Benutzer",
    "Failed to cancel generation; unknown user" : "Fehler beim Abbruch der Erstellung; unbekannter Benutzer",
    "Some internal error occurred. Contact your sysadmin for more info." : "Ein ist ein interner Fehler aufgetreten. Kontaktieren Sie die Systemadministration für weitere Informationen.",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "Kein Sprache-zu-Text-Anbieter gefunden. Installieren Sie einen aus dem App Store, um diese Funktion zu nutzen.",
    "Audio file not found." : "Audiodatei nicht gefunden.",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "Keine Berechtigung zum Erstellen von Aufnahme-Datei/Verzeichnis. Kontaktieren Sie Ihre Systemadministration, um dieses Problem zu lösen.",
    "Failed to set visibility of image files; unknown user" : "Fehler beim Festlegen der Sichtbarkeit von Bilddateien; unbekannter Benutzer",
    "Failed to notify when ready; unknown user" : "Fehler bei der Benachrichtigung der Fertigstellung; unbekannter Benutzer",
    "Unknown error while retrieving prompt history." : "Unbekannter Fehler beim Abrufen des Eingabeaufforderungsverlaufs.",
    "Nextcloud Assistant" : "Nextcloud-Assistent",
    "AI context writer" : "KI zum Kontext-Schreiben",
    "Writing style: %1$s; Source material: %2$s" : "Schreibstil: %1$s; Quellmaterial: %2$s",
    "AI text generation" : "KI-Texterstellung",
    "AI image generation" : "KI-Bilderstellung",
    "AI audio transcription" : "KI Audio-Transskription",
    "Task for \"%1$s\" has finished" : "Aufgabe für \"%1$s\" beendet",
    "\"%1$s\" task for \"%2$s\" has finished" : "\"%1$s\" Aufgabe für \"%2$s\" ist beendet",
    "Input: %1$s" : "Eingabe: %1$s",
    "Result: %1$s" : "Ergebnis: %1$s",
    "View results" : "Ergebnisse anzeigen",
    "Task for \"%1$s\" has failed" : "Aufgabe für \"%1$s\" ist fehlgeschlagen",
    "\"%1$s\" task for \"%2$s\" has failed" : "\"%1$s\" Aufgabe für \"%2$s\" ist fehlgeschlagen",
    "View task" : "Aufgabe anzeigen",
    "Generate text" : "Text erstellen",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "Eine Anfrage an den Assistenten stellen, z. B.: schreiben Sie einen ersten Entwurf einer Präsentation, geben Sie mir Vorschläge für eine Präsentation, schreiben Sie einen Entwurf der Antwort an meinen Kollegen.",
    "Context write" : "Kontext schreiben",
    "Writes text in a given style based on the provided source material." : "Schreibt Text in einem vorgegebenen Stil auf Basis des bereitgestellten Quellmaterials.",
    "Transcribe" : "Transkribieren",
    "Transcribe audio to text" : "Audio in Text transkribieren",
    "Generate image" : "Bild erstellen",
    "Generate an image from a text" : "Bild aus einem Text erstellen",
    "Canceled by user" : "Abbruch durch den Benutzer.",
    "FreePromptTaskType not available" : "FreePromptTaskType nicht verfügbar",
    "Failed to run or schedule a task" : "Fehler bei der Ausführung oder Planung einer Aufgabe",
    "Failed to get prompt history" : "Eingabeverlauf konnte nicht abgerufen werden",
    "Generation not found" : "Erstellung nicht gefunden",
    "Multiple tasks found" : "Mehrere Aufgaben gefunden",
    "Transcript not found" : "Transkript nicht gefunden",
    "No text to image processing provider available" : "Kein Text-zu-Bild-Verarbeitungsanbieter verfügbar",
    "Image request error" : "Fehler bei der Bildanfrage",
    "Image generation not found." : "Bilderstellung nicht gefunden.",
    "Retrieving the image generation failed." : "Fehler beim Abruf des erstellten Bildes.",
    "Image generation failed." : "Bilderstellung fehlgeschlagen.",
    "Image file names could not be fetched from database" : "Bilddateinamen konnten nicht aus der Datenbank abgerufen werden",
    "Image file not found in database" : "Bilddatei nicht in der Datenbank gefunden",
    "Image file not found" : "Bilddatei nicht gefunden",
    "Artificial Intelligence" : "Künstliche Intelligenz",
    "Process and transform text" : "Text verarbeiten und transformieren",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)" : "Diese App bietet eine Benutzeroberfläche zur Nutzung der Nextcloud-Texterstellungsfunktion.\n\nSie ermöglicht Benutzern, KI-Aufgaben zu starten, nach Abschluss benachrichtigt zu werden und die Ergebnisse anzeigen zu lassen.\nDer Assistent erscheint auch in anderen Apps wie z. B. Text, um Teile eines Dokuments einfach zu bearbeiten.\n\nWeitere Details zur Assistenten-OCS-API und den Frontend-Integrationsmöglichkeiten finden Sie im\n[Entwicklerdokument](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### Anleitung\n\nEin neuer Menüeintrag in der rechten Kopfzeile wird angezeigt. Sobald Sie darauf klicken, wird der Assistent angezeigt und Sie können einen Aufgabentyp auswählen und\nLegen Sie die Eingabe fest, die Sie verarbeiten möchten.\n\nAbhängig von der Zeitschätzung des KI-Anbieters kann die Aufgabe sofort ausgeführt oder geplant werden.\nSobald eine Aufgabe geplant ist, wird sie als Hintergrundjob ausgeführt. Wenn es fertig ist, erhalten Sie eine Benachrichtigung\nvon der aus die Ergebnisse angezeigt werden können.\n\nAndere Apps können in den Assistenten integriert werden. Beispielsweise zeigt Text neben jedem Absatz eine Inline-Schaltfläche an\num direkt einen Aufgabentyp zur Bearbeitung dieses Absatzes auszuwählen. Wenn Sie so eine Aufgabe auswählen, wird der Assistent mit der Aufgabe vorausgewählt geöffnet\nund der Eingabetext festgelegt.\n\nWeitere Details und Screenshots unter [Benutzerdokument](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Merkmale\n\nIm Assistenten hängt die Liste der verfügbaren Aufgaben von den verfügbaren Anbietern ab, die über andere Apps installiert wurden.\nDas bedeutet, dass Sie völlig frei entscheiden können, welcher Dienst/welche Software Ihre KI-Aufgaben tatsächlich ausführt.\n\n### Textverarbeitungsanbieter\n\nBisher ist das [große Sprachmodell](https://github.com/nextcloud/llm#readme)\nund die [OpenAi/LocalAI-Integration](https://apps.nextcloud.com/apps/integration_openai) Apps\nEinbinden von Textverarbeitungsanbietern, um:\n* Zusammenfassen\n* Themen extrahieren\n* Generieren Sie eine Überschrift\n* Erhalten Sie eine Antwort über eine kostenlose Eingabeaufforderung\n* Umformulieren (nur OpenAi/LocalAi)\n* Kontextschreiber: Generieren Sie Text mit einem bestimmten Stil. Der Stil kann durch einen Beispieltext beschrieben oder bereitgestellt werden.\n\n### Text zu Bild (Bildgenerierung)\n\nBekannte Anbieter:\n* [OpenAi/LocalAI-Integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Stabile Text2Image-Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Sprache zu Text (Audiotranskription)\n\nBekannte Anbieter:\n* [OpenAi/LocalAI-Integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Lokales Flüster-Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)",
    "Select which features you want to enable" : "Wählen Sie, welche Funktionen aktiviert werden sollen",
    "Top-right assistant" : "Assistent oben rechts",
    "To be able to use this feature, please install at least one AI text processing provider." : "Um diese Funktion nutzen zu können, installieren Sie bitte mindestens einen KI-Textverarbeitungsanbieter.",
    "AI text generation smart picker" : "KI-Texterstellungs-Smart Picker",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "Um diese Funktion zu aktivieren, installieren Sie bitte einen KI-Textverarbeitungsanbieter für den kostenlosen Aufgabentyp \"prompt\".",
    "Text-to-image smart picker" : "Text-zu-Bild Smart Picker",
    "To enable this feature, please install a text-to-image provider." : "Um diese Funktion zu aktivieren, installieren Sie bitte einen Text-zu-Bild-Anbieter.",
    "Speech-to-text smart picker" : "Sprache zu Text Smart Picker",
    "To enable this feature, please install a speech-to-text provider." : "Um diese Funktion zu aktivieren, installieren Sie bitte einen Sprache-zu-Text Anbieter.",
    "Image storage" : "Bild-Speicher",
    "Image generation idle time (days)" : "Bilderstellungs-Leerlaufzeit (Tage)",
    "Days until generated images are deleted if they are not viewed" : "Tage bis erstellte Bilder gelöscht werden, wenn sie nicht angesehen wurden.",
    "Assistant admin options saved" : "Assistenten-Administrationseinstellungen gespeichert",
    "Failed to save assistant admin options" : "Fehler beim Speichern der Assistenten-Administrationseinstellungen",
    "Writing style" : "Schreibstil",
    "Choose file" : "Datei auswählen",
    "Describe the writing style you want to use or supply an example document." : "Beschreiben Sie den Schreibstil, den Sie verwenden möchten, oder liefern Sie ein Beispiel-Dokument",
    "Source material" : "Quellmaterial",
    "Describe what you want the document to be written on." : "Beschreiben Sie, worauf das Dokument geschrieben werden soll.",
    "Selective context" : "Selektiver Kontext",
    "Input" : "Eingabe",
    "Type some text" : "Bitte einen Text eingeben",
    "Choose a text file" : "Textdatei auswählen",
    "Choose" : "Auswählen",
    "No file selected" : "Keine Datei gewählt",
    "Unexpected response from text parser" : "Unerwartete Antwort vom Textparser",
    "Could not parse file" : "Datei konnte nicht geparst werden",
    "Close" : "Schließen",
    "Close Nextcloud Assistant" : "Nextcloud-Assistent schließen",
    "Output" : "Ausgabe",
    "This output was generated by AI. Make sure to double-check and adjust." : "Dieses Ergebnis wurde von KI generiert. Überprüfen Sie die Angaben und passen Sie sie gegebenenfalls an.",
    "Copy output text to clipboard" : "Ausgabetext in die Zwischenablage kopieren",
    "Copy output" : "Ausgabe kopieren",
    "Reset the output value to the originally generated one" : "Ausgabewert auf den original erstellten Wert zurücksetzen",
    "Reset" : "Zurücksetzen",
    "Text Generation" : "Texterstellung",
    "Audio transcription" : "Audio-Transskription",
    "Unknown Result Type" : "Unbekannter Ergebnistyp",
    "Result could not be copied to clipboard" : "Ergebnis konnte nicht in die Zwischenablage kopiert werden",
    "Back to the assistant" : "Zurück zum Assistenten",
    "Previous \"{taskTypeName}\" tasks" : "Vorherige \"{taskTypeName}\"-Aufgaben",
    "Result" : "Ergebnis",
    "The task ran successfully but the result is identical to the input." : "Die Aufgabe wurde erfolgreich ausgeführt, aber Ergebnis und Eingabe sind identisch.",
    "The task ran successfully but the generated text is empty." : "Die Aufgabe wurde erfolgreich ausgeführt, aber der generierte Text ist leer.",
    "Show previous tasks" : "Vorherige Aufgaben anzeigen",
    "Run a task" : "Eine Aufgabe ausführen",
    "Copy" : "Kopieren",
    "Try again" : "Nochmals versuchen",
    "Send request" : "Anfrage senden",
    "Select Files/Folders" : "Dateien/Ordner auswählen",
    "Select Providers" : "Anbieter auswählen",
    "Choose Files/Folders" : "Dateien/Ordner auswählen",
    "Clear Selection" : "Auswahl leeren",
    "Error fetching default provider key" : "Fehler beim Abrufen des Standardanbieterschlüssels",
    "Error fetching providers" : "Fehler beim Abrufen der Anbieter",
    "Text generation content" : "Erstellung von Textinhalten",
    "The text generation task was scheduled to run in the background." : "Die Texterstellungsaufgabe soll im Hintergrund ausgeführt werden.",
    "Estimated completion time: " : "Voraussichtliche Fertigstellungszeit:",
    "This can take a while…" : "Dies kann etwas dauern…",
    "Some generations are still being processed in the background! Showing finished generations." : "Einige Erstellungen werden noch im Hintergrund verarbeitet! Abgeschlossene Erstellungen werden angezeigt.",
    "Loading generations…" : "Lade Erstellungen…",
    "Include prompt in the final result" : "Prompt in das Endergebnis einschließen",
    "Unexpected server response" : "Unerwartete Serverantwort",
    "The processing of generations failed." : "Fehler bei der Verabeitung von Erstellungen.",
    "The processing of some generations failed." : "Fehler bei der Verarbeitung einiger Erstellungen.",
    "Text generation error" : "Fehler bei der Texterstellung",
    "Unknown text generation API error" : "Unbekannter API-Fehler bei der Texterstellung",
    "Prompt" : "Prompt",
    "Result {index}" : "Ergebnis {index}",
    "No provider found" : "Kein Anbieter gefunden",
    "AI Providers need to be installed to use the Assistant" : "Um den Assistenten nutzen zu können, müssen KI-Anbieter installiert sein",
    "tool" : "Werkzeug",
    "integration" : "Integration",
    "complete AI documentation" : "Komplette KI-Dokumentation",
    "AI provider apps can be found in the {toolLink} and {integrationLink} app settings sections." : "KI-Anbieter-Apps finden Sie in den App-Einstellungsabschnitten {toolLink} und {integrationLink}.",
    "You can also check the {aiAdminDocLink}" : "Sie können auch in {aiAdminDocLink} nachsehen.",
    "AI image generation smart picker" : "Smart Picker für KI-Bildgenerierung",
    "AI transcription smart picker" : "Smart Picker für KI-Transkription",
    "No suitable providers are available. They must first be enabled by your administrator." : "Keine geeigneten Anbieter verfügbar. Diese müssen zunächst von Ihrer Administration aktiviert werden.",
    "Assistant options saved" : "Assistenteneinstellungen gespeichert",
    "Failed to save assistant options" : "Fehler beim Speichern der Assistenteneinstellungen",
    "Getting results…" : "Ergebnisse holen…",
    "Run in the background" : "Im Hintergrund ausführen",
    "You will receive a notification when it has finished" : "Sie erhalten eine Benachrichtigung, wenn der Vorgang abgeschlossen ist",
    "Your task has been scheduled" : "Ihre Aufgabe wurde geplant",
    "Record Audio" : "Audio aufnehmen",
    "Choose Audio File" : "Audiodatei auswählen",
    "Reset recorded audio" : "Audioaufnahme zurücksetzen",
    "Start recording" : "Aufnahme beginnen",
    "Stop recording" : "Aufnahme stoppen",
    "No audio file selected" : "Keine Audiodatei ausgewählt",
    "Selected Audio File:" : "Ausgewählte Audiodatei:",
    "Choose audio file in your storage" : "Wählen Sie eine Audiodatei in Ihrem Speicher aus",
    "Choose audio File" : "Audiodatei auswählen",
    "Nothing yet" : "Noch nichts vorhanden",
    "You have not submitted any \"{taskTypeName}\" task yet" : "Sie haben noch keine „{taskTypeName}“-Aufgabe eingereicht",
    "Copy result" : "Ergebnis kopieren",
    "Cancel" : "Abbrechen",
    "Delete" : "Löschen",
    "Audio input" : "Audioeingang",
    "Unknown input" : "Unbekannte Eingabe",
    "This task is scheduled" : "Diese Aufgabe ist geplant",
    "Running..." : "Läuft…",
    "Failed" : "Fehlgeschlagen",
    "Unknown error" : "Unbekannter Fehler",
    "Unknown status" : "Unbekannter Status",
    "Succeeded" : "Erfolgreich",
    "Running" : "Laufen",
    "Scheduled" : "Geplant",
    "Task result was copied to clipboard" : "Aufgabenergebnis wurde in die Zwischenablage kopiert",
    "_{n} image has been generated_::_{n} images have been generated_" : ["{n} Bild wurde erstellt","{n} Bilder wurden erstellt"],
    "_Generation of {n} image is scheduled_::_Generation of {n} images is scheduled_" : ["Erstellung von {n} Bild geplant","Erstellung von {n} Bildern geplant"],
    "Image generation" : "Bilderstellung",
    "Edit visible images" : "Sichtbare Bilder bearbeiten",
    "Click to toggle generation visibility" : "Hier klicken um die Sichtbarkeit der Erstellung umzuschalten",
    "Generated image" : "Erstelltes Bild",
    "This generation has no visible images" : "Diese Erstellung hat keine sichtbaren Bilder",
    "Estimated generation time left: " : "Geschätzte verbleibende Erstellungszeit:",
    "The image(s) will be displayed here once generated." : "Die Bilder werden hier angezeigt, sobald sie erstellt wurden.",
    "This image generation was scheduled to run in the background." : "Diese Bildererstellung wurde zur Ausführung im Hintergrund geplant.",
    "Image generation failed" : "Bilderstellung ist fehlgeschlagen",
    "Rate limit reached. Please try again later." : "Bewertungslimit erreicht. Bitte versuchen Sie es später noch einmal.",
    "Unknown server query error" : "Unbekannter Serverabfragefehler",
    "Failed to get images" : "Fehler beim Abruf der Bilder",
    "Include the prompt in the result" : "Prompt in das Ergebnis einschließen",
    "Number of results" : "Anzahl der Ergebnisse",
    "Enter your question or task here:" : "Ihre Frage oder Aufgabe hier eingeben:",
    "Preview text generation by AI" : "Vorschau der Texterstellung durch KI",
    "Notify when ready" : "Benachrichtigen wenn bereit",
    "Submit text generated by AI" : "Von KI erstellten Text übermitteln",
    "Submit" : "Übermitteln",
    "Regenerate" : "Neu erstellen",
    "Preview" : "Vorschau",
    "You will be notified when the text generation is ready." : "Sie werden benachrichtigt, wenn die Texterstellung abgeschlossen ist.",
    "Notify when ready error" : "Fehler bei der Fertigstellungsbenachrichtigung",
    "Unknown notify when ready error" : "Unbekannter Fehler für \"Benachrichtigung bei Bereitschaft\"",
    "The task could not be found. It may have been deleted." : "Die Aufgabe konnte nicht gefunden werden. Möglicherweise wurde diese gelöscht.",
    "Schedule Transcription" : "Transkription planen",
    "Successfully scheduled transcription" : "Transkription geplant",
    "Failed to schedule transcription" : "Fehler bei der Planung der Transkription",
    "Unknown API error" : "Unbekannter API-Fehler",
    "Failed to schedule your task" : "Die Planung Ihrer Aufgabe ist fehlgeschlagen",
    "Preview image generation by AI" : "Vorschaubilderstellung durch KI",
    "Submit image(s) generated by AI" : "Von KI generierte(s) Bild(er) übermitteln",
    "Send" : "Senden",
    "Show/hide advanced options" : "Erweiterte Optionen anzeigen/ausblenden",
    "Advanced options" : "Erweiterte Optionen",
    "A description of the image you want to generate" : "Eine Beschreibung des Bildes, das Sie erstellen lassen möchten",
    "Image generation cancel error" : "Fehler beim Abbrechen der Bilderstellung",
    "Unknown image generation cancel error" : "Unbekannter Fehler beim Abbruch der Bilderstellung",
    "Unexpected response from server." : "Unerwartete Antwort vom Server.",
    "Image generation error" : "Fehler bei der Bilderstellung",
    "Unknown image generation error" : "Unbekannter Fehler bei der Bilderstellung",
    "You will be notified when the image generation is ready." : "Sie werden benachrichtigt, wenn die Bilderstellung bereit ist.",
    "Copy the link to this generation to clipboard" : "Link zu dieser Erstellung in die Zwischenablage kopieren",
    "Copy link to clipboard" : "Link in Zwischenablage kopieren",
    "Image link copied to clipboard" : "Bild-Link in die Zwischenablage kopiert",
    "Image link could not be copied to clipboard" : "Bild-Link konnte nicht in die Zwischenablage kopiert werden",
    "Assistant error" : "Fehler des Assistenten",
    "This task does not exist or has been cleaned up" : "Diese Aufgabe existiert nicht oder wurde bereinigt",
    "Failed to schedule the task" : "Die Planung der Aufgabe ist fehlgeschlagen"
},
"nplurals=2; plural=(n != 1);");
