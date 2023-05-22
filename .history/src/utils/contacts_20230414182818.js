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
      
      if (!nombre && !numTel && !email) {
        // Si faltan todas las entidades, preguntar al usuario si desea agregar más información.
        res.send('¿Desea agregar información adicional sobre el contacto?');
        // Continuar con el proceso de agregar más información
      } else if (!nombre && !numTel && email) {
        // Si falta el nombre y el número de teléfono, preguntar al usuario si desea agregar un nombre y número de teléfono.
        res.send('¿Desea agregar un nombre y número de teléfono para este contacto?');
        // Continuar con el proceso de agregar el nombre y el número de teléfono.
      } else if (!nombre && numTel && !email) {
        // Si falta el nombre y el correo electrónico, preguntar al usuario si desea agregar un nombre y correo electrónico.
        res.send('¿Desea agregar un nombre y correo electrónico para este contacto?');
        // Continuar con el proceso de agregar el nombre y el correo electrónico.
      } else if (nombre && !numTel && !email) {
        // Si falta el número de teléfono y el correo electrónico, preguntar al usuario si desea agregar un número de teléfono y correo electrónico.
        res.send('¿Desea agregar un número de teléfono y correo electrónico para este contacto?');
        // Continuar con el proceso de agregar el número de teléfono y el correo electrónico.
      } else if (!nombre && numTel && email) {
        // Si falta el nombre, preguntar al usuario si desea agregar un nombre.
        res.send('¿Desea agregar un nombre para este contacto?');
        // Continuar con el proceso de agregar el nombre.
      } else if (nombre && !numTel && email) {
        // Si falta el número de teléfono, preguntar al usuario si desea agregar un número de teléfono.
        res.send('¿Desea agregar un número de teléfono para este contacto?');
        // Continuar con el proceso de agregar el número de teléfono.
      } else if (nombre && numTel && !email) {
        // Si falta el correo electrónico, preguntar al usuario si desea agregar un correo electrónico.
        res.send('¿Desea agregar un correo electrónico para este contacto?');
        // Continuar con el proceso de agregar el correo electrónico.
      } else {
        // Si todas las entidades necesarias están presentes, continuar con el proceso correspondiente.
        console.log(nombre, numTel, email);
        // Continuar con el proceso correspondiente.
      }
      break;
    default:
      // Si no se reconoce la acción, responde con un mensaje de error


module.exports = controlEvents;