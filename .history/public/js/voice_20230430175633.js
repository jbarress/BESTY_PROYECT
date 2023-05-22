const { SpeechRecognition } = window;

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'es-ES';
  recognition.interimResults = true;
  recognition.continuous = true; // hace que el reconocimiento de voz esté constantemente escuchando

  recognition.onresult = function (event) {
    const lastResultIndex = event.results.length - 1;
    const transcript = event.results[lastResultIndex][0].transcript;
    console.log(transcript);
    // Llamar a una función específica para procesar el comando de voz
    procesarComando(transcript);
  }

  recognition.start();

  function procesarComando(comando) {
    // Función vacía que se activa cuando se reconoce un comando de voz
  }
}
