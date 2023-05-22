const spacy = require('@nlpjs/spacy-es');

// Carga el modelo pre-entrenado de spaCy para el idioma español
spacy.load().then((nlp) => {
  
  // Define una función para procesar el input del usuario
  async function procesarInput(input) {
    
    // Procesa el input utilizando spaCy
    const doc = await nlp.process(input);
    
    // Si el input se refiere a un evento, extrae la fecha y hora del evento
    if (doc.ents[0].label === "EVENTO") {
      const fecha = doc.ents[0].start.date();
      console.log("Evento:", input);
      console.log("Fecha:", fecha.toLocaleDateString());
      console.log("Hora:", fecha.toLocaleTimeString());
    }
    
    // Si el input se refiere a subir el volumen, extrae la palabra "volumen" y el sentido de la acción
    else if (doc.ents[0].text.toLowerCase() === "volumen") {
      const accion = doc.verbs[0].lemma;
      console.log("Input:", input);
      console.log("Acción:", accion);
      console.log("Objeto:", doc.ents[0].text);
    }
    
    // Si el input se refiere a reproducir una canción, extrae el nombre de la canción y del artista
    else if (doc.ents[0].label === "CANCION") {
      const cancion = doc.ents[0].text;
      const artista = doc.ents[1].text;
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
