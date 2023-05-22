const spacy = require('@nlpjs/lang-es');
const { NlpManager } = require('node-nlp');

// Carga el modelo pre-entrenado de spaCy para el idioma español
spacy.load().then((nlp) => {
  
  // Crea un nuevo NlpManager para procesar el input del usuario
  const manager = new NlpManager({ languages: ['es'] });
  
  // Añade al NlpManager las entidades reconocidas por spaCy
  manager.addNamedEntityText('EVENTO', 'evento');
  manager.addNamedEntityText('CANCION', 'canción');
  
  // Define las intenciones posibles
  manager.addDocument('es', 'Crea un evento para *fecha*', 'crear-evento');
  manager.addDocument('es', 'Sube el volumen de *objeto*', 'subir-volumen');
  manager.addDocument('es', 'Reproduce *canción* de *artista*', 'reproducir-canción');
  
  // Entrena al NlpManager
  manager.train();
  
  // Define una función para procesar el input del usuario
  async function procesarInput(input) {
    
    // Procesa el input utilizando spaCy
    const doc = await nlp.process(input);
    
    // Analiza el input utilizando el NlpManager
    const response = await manager.process('es', input);
    
    // Obtiene la intención del input
    const intent = response.intent;
    
    // Si el input se refiere a crear un evento, extrae la fecha y hora del evento
    if (intent === "crear-evento") {
      const fecha = response.entities[0].sourceText;
      console.log("Input:", input);
      console.log("Evento:", response.answer);
      console.log("Fecha:", fecha);
    }
    
    // Si el input se refiere a subir el volumen, extrae la palabra "volumen" y el sentido de la acción
    else if (intent === "subir-volumen") {
      const objeto = response.entities[0].sourceText;
      console.log("Input:", input);
      console.log("Acción:", response.answer);
      console.log("Objeto:", objeto);
    }
    
    // Si el input se refiere a reproducir una canción, extrae el nombre de la canción y del artista
    else if (intent === "reproducir-canción") {
      const cancion = response.entities[0].sourceText;
      const artista = response.entities[1].sourceText;
      console.log("Input:", input);
      console.log("Canción:", cancion);
      console.log("Artista:", artista);
    }
    
    // Si el input no se reconoce, muestra un mensaje de error
    else {
      console.log("No se pudo reconocer el input:", input);
    }
  }
  
  // Ejemplos de uso
  procesarInput("Crea un evento para mañana a las diez de la mañana para ir al médico");
  procesarInput("Sube el volumen de la música");
  procesarInput("Reproduce una canción de Billie Eilish");
});
