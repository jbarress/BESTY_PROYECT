

function controlEvents(entities, traits, res) {
  var action = entities['action:action']?.[0]?.value;
  // var specific = entities['bd_especific:bd_especific']?.[0]?.value;
  
  switch (action) {
    case 'show':
      res.render('index', { showCalendar : true });
      break;
    case 'create':
      var nombre = entities['wit$contact:contact']?.[0]?.value;
      var numTel = entities['wit$phone_number:phone_number']?.[0]?.value;
      var email = entities['wit$email:email']?.[0]?.value;
      
            // Crear un objeto con los valores de las entidades
            const data = {
              nombre: nombre,
              numTel: numTel,
              email: email
            };
            
            // Realizar la solicitud POST utilizando axios
            axios.post('https://ejemplo.com/api/contactos', data)
              .then(response => {
                console.log(response.data);
                // Continuar con el proceso correspondiente.
              })
              .catch(error => {
                console.error(error);
                // Manejar el error de la solicitud.
              });
      break;
    default:
      // Si no se reconoce la acción, responde con un mensaje de error.
      res.send('No se reconoce la acción solicitada.');
      break;
  }
}



module.exports = controlEvents;