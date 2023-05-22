const { Wit, log } = require('node-wit');
// Setea el token de acceso del bot de Wit.ai
const client = new Wit({ accessToken: 'W4YG7TJ5O62DFSTSX5IBRDCFJMPV2N72' });

function witQuery(message) {
  try{
    return client.message(message, {})
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
  }catch(err){
    return "No entiendo lo que has dicho, podrias repetir"
  }

}
module.exports = witQuery;