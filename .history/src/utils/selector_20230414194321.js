
const controlSettings = require("../utils/settings.js");
const controlContacts = require('../utils/contacts');

function selectOrder(data, res){

    var intent = data.intents[0].name
    var entities = data.entities;
    var traits = data.traits;
    console.log('selector')
    switch(intent){
        case "settings":
            controlSettings(entities, traits);
            break;
        case "contactos":
            controlContacts(entities, traits, res);
            break;
        case "chat":
            return true;
    }
}

module.exports = selectOrder;