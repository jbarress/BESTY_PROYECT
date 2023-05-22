const { SpeechRecognition } = window;

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'es-ES';
  recognition.interimResults = true;

  recognition.start();

  recognition.onresult = function (event) {
    const lastResultIndex = event.results.length - 1;
    const transcript = event.results[lastResultIndex][0].transcript;
    console.log(transcript);
    recognition.stop();
    // Llamar a una función específica para procesar el comando de voz
    procesarComando(transcript);
    // Iniciar el reconocimiento de voz nuevamente después de procesar el comando
    recognition.start();
  }
}

function procesarComando(comando) {
  // Código para procesar el comando de voz
}
