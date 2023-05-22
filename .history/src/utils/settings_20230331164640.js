
const controlSettings = require("../utils/auxiliarFunctions");

function controlSettings(entities){

    var object = entities['settings_object:settings_object'][0].value;
    
    switch(object){
        case "vol":
            adjustVolumen(entities)
    }
}

function adjustVolumen(entities){

    var action = entities['settings_action:settings_action'][0].value;
    var cuantity = entities['settings_cuantity:settings_cuantity'][0].body;
    var cuantityType = entities['settings_cuantity_type:settings_cuantity_type'][0].value;

    console.log(action+","+cuantity+","+cuantityType)

    cuantityParse()

}

module.exports = controlSettings;