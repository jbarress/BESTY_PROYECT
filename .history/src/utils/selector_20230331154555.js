
const controlSettings = require("../utils/settings.js");

function selectOrder(data){

    var intent = data.intents[0].name
    var entities = data.entities;
    var traits = data.traits;
    switch(intent){
        case "settings":
            controlSettings(entities, traits);
    }
}

module.exports = selectOrder;