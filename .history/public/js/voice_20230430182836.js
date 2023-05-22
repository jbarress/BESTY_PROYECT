const { SpeechRecognition } = window;

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
    // Imprime el comando de voz en la consola
    fetch('/comand', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ onden: comando })
    })
      .then(response => {
        // Procesa la respuesta del servidor si es necesario
        console.log('Comando enviado con éxito');
      })
      .catch(error => {
        console.error('Error al enviar el comando', error);
      });
  }
  console.log('Comando detectado: ' + comando);
}

