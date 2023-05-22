const chrono = require('chrono-node');

function controlEvents(entities, traits, res) {
  var action = entities['bd_action:bd_action'][0].value;
  // var specific = entities['bd_especific:bd_especific'][0].value;
  switch (action) {
    case 'show':
      res.render('index', { showCalendar : true});
      break;
    case 'create':
      console.log(entities)
      var titulo = entities['bd_tittle:bd_tittle'][0].value;
      var fecha = entities['bd_date:bd_date'][0].value;
      const results = chrono.parse(fecha);
      console.log(titulo, fecha)
  }
}


module.exports = controlEvents;