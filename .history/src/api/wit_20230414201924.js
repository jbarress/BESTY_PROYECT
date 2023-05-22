const { Wit, log } = require('node-wit');
// Setea el token de acceso del bot de Wit.ai
const client = new Wit({ accessToken: 'ZLIOXFHCWTNUDNGCVVLPQ3VW75Y27T4N' });

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