const { Wit, log } = require('node-wit');
// Setea el token de acceso del bot de Wit.ai
const client = new Wit({ accessToken: 'W4YG7TJ5O62DFSTSX5IBRDCFJMPV2N72' });

function witQuery(message) {
  console.log('entra en wit')
  return client.message(message, {})
    .then((data) => {
      console.log(data.intents)
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
module.exports = witQuery;