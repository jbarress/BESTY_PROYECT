
const controlSettings = require("../utils/settings.js");

function selectOrder(data){

    var intent = data.intents[0].name

    switch(intent){
        case "settings":
            controlSettings(data.entities);
    }
}

module.exports = selectOrder;