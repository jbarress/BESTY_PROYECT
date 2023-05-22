
const controlEvents = require('../utils/events');

function controlBD(entities, traits, res){
    var object = entities['bd_object:bd_object'][0].value;
    switch(object){
      case 'event':
        console.log('entra en eventos')
        controlEvents(entities, traits, res);
    }
  }
  
module.exports = controlBD;