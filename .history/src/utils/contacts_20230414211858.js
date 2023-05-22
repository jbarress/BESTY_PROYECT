const axios = require('axios');

async function controlContacts(entities, traits, res) {
  var action = entities['action:action']?.[0]?.value;
  // var specific = entities['bd_especific:bd_especific']?.[0]?.value;
  var response;
  switch (action) {
    case 'show':
      res.render('index', { showContacts: true });
      response = 'Mostrando tu lista de contactos'
      break;
    case 'create':
    
      var nombre = entities['wit$contact:contact']?.[0]?.value;
      var numTel = entities['wit$phone_number:phone_number']?.[0]?.value;
      var email = entities['wit$email:email']?.[0]?.value;

      // Crear un objeto con los valores de las entidades
      const data = {
        nombre: nombre,
        telefono: numTel,
        email: email
      };

      // Realizar la solicitud POST utilizando axios
      await axios.post('http://localhost:8080/contactos', data)
        .then(response => {
          console.log(response.data);
          // Continuar con el proceso correspondiente.
          response = 'He guardado el contacto guardado correctamente'
        })
        .catch(error => {
          console.error(error);
          response = 'No he podido guardar el contacto'
          // Manejar el error de la solicitud.
        });
        
      break;
    case 'delete':

      var nombre = entities['wit$contact:contact']?.[0]?.value;
      // Busca el contacto por su nombre en la base de datos de MongoDB
      try {
        await axios.delete(`http://localhost:8080/contactos?nombre=${nombre}`);
        response = 'He eliminado el contacto';
      } catch (error) {
        console.error(error);
        response = 'No he podido eliminar el contacto';
      }
    default:
      // Si no se reconoce la acción, responde con un mensaje de error.
      response = "No se reconoce la accion solicitada porfavor vuelva a dar la orden"
      break;
  }
  return response;
}



module.exports = controlContacts;