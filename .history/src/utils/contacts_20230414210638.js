const axios = require('axios');

function controlEvents(entities, traits, res) {
  var action = entities['action:action']?.[0]?.value;
  // var specific = entities['bd_especific:bd_especific']?.[0]?.value;

  switch (action) {
    case 'show':
      res.render('index', { showCalendar: true });
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
      axios.post('http://localhost:8080/contactos', data)
        .then(response => {
          console.log(response.data);
          // Continuar con el proceso correspondiente.
          response = 'Contacto guardado correctamente'
        })
        .catch(error => {
          console.error(error);
          return 'no se ha podido guardar el contacto'
          // Manejar el error de la solicitud.
        });

      break;
    case 'delete':

      var nombre = entities['wit$contact:contact']?.[0]?.value;
      // Busca el contacto por su nombre en la base de datos de MongoDB
      axios.delete(`http://localhost:8080/contactos?nombre=${nombre}`);

      return 'contacto borrado correctamente'
    default:
      // Si no se reconoce la acción, responde con un mensaje de error.
      return 'No se reconoce la acción solicitada.'
      break;
  }
}



module.exports = controlEvents;