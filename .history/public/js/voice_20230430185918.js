const { SpeechRecognition } = window;
var btn = document.getElementById('orden-btn')
var input = document.getElementById('orden-input')

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'es-ES';
  recognition.interimResults = false;
  recognition.continuous = true; // establece el reconocimiento de voz en modo continuo

  recognition.onresult = function (event) {
    const lastResultIndex = event.results.length - 1;
    const transcript = event.results[lastResultIndex][0].transcript;
    console.log(transcript);
    // llama a la función procesarComando con el texto transcrita como argumento
    procesarComando(transcript);
  }

  recognition.start();

  function procesarComando(comando) {
    input.value = comando.toLowerCase();
  }
}
