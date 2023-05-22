function controlEvents(entities, traits, res) {
    var action = entities['action:action'][0].value;
    // var specific = entities['bd_especific:bd_especific'][0].value;
    switch (action) {
      case 'show':
        res.render('index', { showCalendar : true});
        break;
      case 'create':
        var nombre = entities['wit/contact:wit/contact'][0].value;
        var numTel = entities['wit/email:wit/email'][0].value;
        var email = entities['wit/email:wit/email'][0].value;
        const results = chrono.parse(fecha);
        console.log(fecha)
        if (results.length > 0) {
          const date = results[0].start.date();
          const fechaformated = date.toLocaleString('es-ES', { timeZone: 'UTC' });
          console.log(titulo, fechaformated)
        }else{
          console.log('error')
        }
        
    }
  }