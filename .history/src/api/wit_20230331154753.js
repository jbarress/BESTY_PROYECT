const { Wit, log } = require('node-wit');
const loudness = require('loudness');
// Setea el token de acceso del bot de Wit.ai
const client = new Wit({ accessToken: 'VPNNGHWHYIELYFLCFIL6UMHFDYZJXXRL' });


// Define una función para enviar una consulta al bot de Wit.ai
function witQuery(message) {
  return client.message(message, {})
    .then((data) => {
      // Aquí puedes hacer algo con los datos devueltos por el bot de Wit.ai
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
module.exports = witQuery;