const { SpeechRecognition } = window;
const btn = document.getElementById('orden-btn');
const input = document.getElementById('orden-input');

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'es-ES';
  recognition.interimResults = false;
  recognition.continuous = true;

  let isListening = false; // indicador de si se está escuchando

  setInterval(() => {
    if (!isListening) { // si no se está escuchando, reiniciar el reconocimiento de voz
      recognition.stop();
      recognition.start();
    }
  }, 1000);

  recognition.onresult = function (event) {
    const lastResultIndex = event.results.length - 1;
    const transcript = event.results[lastResultIndex][0].transcript;
    console.log(transcript);
    recognition.stop();
    isListening = true; // establecer que se está escuchando

    // llamar a la función procesarComando con el texto transcrita como argumento
    procesarComando(transcript);
  };

  function procesarComando(comando) {
    input.value = comando;
    btn.click();

    isListening = false; // establecer que no se está escuchando después de procesar el comando
  }
}
