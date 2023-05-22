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
      
      if (!nombre) {
        res.send('Falta información sobre el nombre del contacto.');
        return;
      }
      
      if (!numTel) {
        res.send('Falta información sobre el número de teléfono del contacto.');
        return;
      }
      
      if (!email) {
        res.send('Falta información sobre el correo electrónico del contacto.');
        return;
      }
      
      console.log(nombre, numTel, email);
      // Continuar con el proceso correspondiente.
      break;
    default:
      // Si no se reconoce la acción, responde con un mensaje de error.
      res.send('No se reconoce la acción solicitada.');
      break;
  }
}


module.exports = controlEvents;