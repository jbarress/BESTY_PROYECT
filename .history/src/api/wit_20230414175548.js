const { Wit, log } = require('node-wit');
const loudness = require('loudness');
// Setea el token de acceso del bot de Wit.ai
const client = new Wit({ accessToken: 'W4YG7TJ5O62DFSTSX5IBRDCFJMPV2N72' });

function witQuery(message) {
  return client.message(message, {})
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
module.exports = witQuery;