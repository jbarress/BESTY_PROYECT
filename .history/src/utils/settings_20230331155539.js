
function controlSettings(entities){

    var object = entities['settings_object:settings_object'][0].value;
    
    switch(object){
        case "vol":
            adjustVolumen(entities)
    }
}

function adjustVolumen(entities){

    var action = data['settings_action:settings_action'][0].value

}

module.exports = controlSettings;