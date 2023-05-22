const { Wit, log } = require('node-wit');
const loudness = require('loudness');
// Setea el token de acceso del bot de Wit.ai
const client = new Wit({ accessToken: 'RDEVLMEXMGJFA5THHJRNAGVSICF7WWD7' });


// Define una función para enviar una consulta al bot de Wit.ai

function witQuery(message) {
  client.message(message, {})
    .then((data) => {
      console.log(data)
      loudness.getVolume().then((vol)=>{
        console.log(vol);
      });
    })
    .catch(console.error);
}



// Envía una consulta al bot de Wit.ai
witQuery('baja el volumen 8%');
