
function controlSettings(entities){

    var object = entities['settings_object:settings_object'][0].value;
    
    switch(object){
        case "vol":
            adjustVolumen(entities)
    }
}

function adjustVolumen(entities){

    var action = entities['settings_action:settings_action'][0].value;
    var cuantity = entities['settings_cuantity:settings_cuantity'][0].value;
    var cuantityType = entities['settings_relative_cuantity:settings_relative_cuantity'][0].value:

}

module.exports = controlSettings;