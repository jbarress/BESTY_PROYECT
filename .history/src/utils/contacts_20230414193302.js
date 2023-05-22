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
        })
        .catch(error => {
          console.error(error);
          // Manejar el error de la solicitud.
        });

      break;
      case 'delete':
        var nombre = entities['wit$contact:contact']?.[0]?.value;
         // Busca el contacto por su nombre en la base de datos de MongoDB
  Contacto.findOne({ nombre: nombre }, function (error, contacto) {
    if (error) {
      console.error(error);
      // Maneja el error de la búsqueda
    } else {
      // Realiza la solicitud DELETE utilizando el ID del contacto encontrado
      axios.delete(`http://localhost:8080/contactos/${contacto._id}`)
        .then(response => {
          console.log(response.data);
          // Continuar con el proceso correspondiente.
        })
        .catch(error => {
          console.error(error);
          // Manejar el error de la solicitud.
        });
    }
  });
    default:
      // Si no se reconoce la acción, responde con un mensaje de error.
      res.send('No se reconoce la acción solicitada.');
      break;
  }
}



module.exports = controlEvents;