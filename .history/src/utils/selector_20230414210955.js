
const controlSettings = require("../utils/settings.js");
const controlContacts = require('../utils/contacts.js');

function selectOrder(data, res) {

    var intent = data.intents[0].name
    var entities = data.entities;
    var traits = data.traits;
    console.log('selector')
    switch (intent) {
        case "settings":
            console.log('entra en el ajuste de settings')
            var respuestaSettings = controlSettings(entities, traits);
            return respuestaSettings;
            break;
        case "contactos":
            console.log('entra en el ajuste de conatctos')
            var respuestaContacts = controlContacts(entities, traits, res);
            return respuestaContacts;
            break;
        default:
    }
}

module.exports = selectOrder;