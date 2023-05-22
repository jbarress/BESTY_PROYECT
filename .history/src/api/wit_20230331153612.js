const { Wit, log } = require('node-wit');
const loudness = require('loudness');
// Setea el token de acceso del bot de Wit.ai
const client = new Wit({ accessToken: 'LKX4OBUTYAYWKK4B6XDECRBD5ZKWRNH6' });


// Define una función para enviar una consulta al bot de Wit.ai
function witQuery(message) {
  return client.message(message, {})
    .then((data) => {
      // Aquí puedes hacer algo con los datos devueltos por el bot de Wit.ai
      console.log(data)
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
module.exports = witQuery;