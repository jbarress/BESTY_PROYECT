const { NlpManager } = require('@nlpjs/core');
const { LangEs } = require('@nlpjs/lang-es');

// Creamos una instancia de NlpManager
const manager = new NlpManager();

// Añadimos el idioma español
const lang = new LangEs();
manager.addLanguage('es', lang);

// Añadimos ejemplos de entrenamiento para cada acción que queremos reconocer
manager.addDocument('es', 'crear un evento para mañana a las diez de la mañana', 'crearEvento');
manager.addDocument('es', 'subir el volumen de la música', 'subirVolumen');
manager.addDocument('es', 'reproducir una canción de Billie Eilish', 'reproducirCancion');

// Entrenamos al modelo
manager.train();

// Procesamos el texto de entrada y obtenemos la intención
const input1 = 'crear un evento para mañana a las diez de la mañana';
const input2 = 'subir el volumen de la música';
const input3 = 'reproducir una canción de Billie Eilish';

let response1 = manager.process('es', input1);
let response2 = manager.process('es', input2);
let response3 = manager.process('es', input3);

console.log(response1.intent);
console.log(response2.intent);
console.log(response3.intent);