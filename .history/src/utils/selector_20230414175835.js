
const controlSettings = require("../utils/settings.js");
const controlBD = require("../utils/bd.js");

function selectOrder(data, res){

    var intent = data.intents[0].name
    var entities = data.entities;
    var traits = data.traits;
    console.log('selector')
    switch(intent){
        case "settings":
            controlSettings(entities, traits);
            break;
        case "contacto":
            controlContact(entities, traits, res);
    }
}

module.exports = selectOrder;