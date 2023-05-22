const { SpeechRecognition } = window;

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'es-ES';
  recognition.interimResults = true;

  recognition.start();

  recognition.onresult = reloadVoice(ev);
}

function reloadVoice(event){
  recognition.stop();
  const lastResultIndex = event.results.length - 1;
  const transcript = event.results[lastResultIndex][0].transcript;
  console.log(transcript);
  recognition.start();
}

