
const controlSettings = require("../utils/settings.js");
const controlContacts = require('../utils/contacts.js');
const controlRecords = require('../utils/records.js');
const controlHorario = require('../utils/horario.js');
const controlVolumen = require('../utils/volumen.js');
const controlTabs = require('../utils/tabs.js');
const controlTransacciones = require('../utils/transactions.js');
const controlMusic = require('../utils/music.js');

async function selectOrder(data, res, orden) {

    var intent = data.intents[0].name
    var entities = data.entities;
    var traits = data.traits;
    var respuesta;
    console.log('El intent es:' + intent)
    switch (intent) {
        case "settings":
            console.log('entra en el ajuste de settings')
            respuesta = await controlSettings(entities, traits, res, orden)
            break;
        case "contactos":
            console.log('entra en el ajuste de contactos')
            respuesta = await controlContacts(entities, traits, res, orden)
            break;
        case "records":
            console.log('entra en recordatorios')
            respuesta = await controlRecords(entities, traits, res, orden)
            break;
        case "transaction":
            console.log('entra en transacciones')
            respuesta = await controlTransacciones(entities, traits, res, orden)
            break;
        case 'music':
            console.log('entra en musica')
            respuesta = await controlMusic(entities, traits, res, orden);
            break;
        case 'horario':
            console.log('entra en horario');
            respuesta = await controlHorario(entities, traits, res, orden);
            break;
        case 'tabs':
            console.log('entra en tabs');
            respuesta = await controlTabs(entities, traits, res, orden);
            break;
        case 'volumen':
            respuesta = await controlVolumen(entities, traits, res, orden);
            break;
        default:
            respuesta = "No he podido ejecutar el comando"
            break;
    }
    return await respuesta;
}

module.exports = selectOrder;