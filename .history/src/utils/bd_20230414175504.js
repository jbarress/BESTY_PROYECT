
const controlEvents = require('../utils/events');
const controlContacts = require('../utils/contacts');

function controlBD(entities, traits, res){
  console.log(entities)
    // var object = entities['object:object'][0].value;
    // switch(object){
    //   case 'event':
    //     console.log('entra en eventos')
    //     controlEvents(entities, traits, res);
    //   break;
    //   case 'contact':
    //     console.log('entra en contactos');
    //     controlContacts(entities, traits, res);
    // }
  }
  
module.exports = controlBD;