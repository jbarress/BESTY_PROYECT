
const routerEvents = require('../../routes/eventos.js');

function controlEvents(entities, traits, res) {
  var action = entities['bd_action:bd_action'][0].value;
  var specific = entities['bd_especific:bd_especific'][0].value;
  switch (action) {
    case 'show':
      res.render('index', { showCalendar : true});
      break;
    case 'create':
  }
}


module.exports = controlEvents;