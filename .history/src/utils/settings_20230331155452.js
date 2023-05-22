
function controlSettings(entities){

    var object = entities['settings_object:settings_object'][0].value;
    
    switch(object){
        case "vol":
            adjustVolumen(entities)
    }
}

module.exports = controlSettings;