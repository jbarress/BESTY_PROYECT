function controlEvents(entities, traits, res) {
    var action = entities['action:action'][0].value;
    // var specific = entities['bd_especific:bd_especific'][0].value;
    switch (action) {
      case 'show':
        res.render('index', { showCalendar : true});
        break;
      case 'create':
        var nombre = entities['wit/contact:wit/contact'][0].value;
        var numTel = entities['wit/phone_number:wit/phone_number'][0].value;
        var email = entities['wit/email:wit/email'][0].value;
        
        console.log(nombre, numTel, email)

    }
  }

  module.exports = controlEvents;