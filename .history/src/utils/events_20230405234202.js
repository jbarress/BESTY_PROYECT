const chrono = require('chrono-node');

function controlEvents(entities, traits, res) {
  var action = entities['bd_action:bd_action'][0].value;
  // var specific = entities['bd_especific:bd_especific'][0].value;
  switch (action) {
    case 'show':
      res.render('index', { showCalendar : true});
      break;
    case 'create':
      var titulo = entities['bd_tittle:bd_tittle'][0].value;
      var fecha = entities['bd_date:bd_date'][0].value;
      const results = chrono.parse(fecha);
      if (results.length > 0) {
        const date = results[0].start.date();
        const fechaformated = date.toLocaleString('es-ES', { timeZone: 'UTC' });
        console.log(titulo, fechaformated)
      }else{
        console.log('error')
      }
      
  }
}


module.exports = controlEvents;