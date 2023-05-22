
const loudness = require("loudness");
const auxiliarFunctions = require("../utils/auxiliarFunctions");

function controlSettings(entities) {

    var object = entities['settings_object:settings_object'][0].value;

    switch (object) {
        case "vol":
            adjustVolumen(entities)
    }
}

function adjustVolumen(entities) {

    var action = entities['settings_action:settings_action'][0].value;
    var cuantityStr = entities['settings_cuantity:settings_cuantity'][0].value;
    var cuantityType = entities['settings_cuantity:settings_cuantity'][0].body;
    var cuantityMod = entities['settings_cuantity_type:settings_cuantity_type'][0].value;

    console.log(action + "," + cuantity + "," + cuantityType + "," + cuantityMod)

    var cauntityNum = convertToNumber(cuantityStr);

    if (cuantityMod == 'absolut') {
        loudness.setVolume(cauntityNum * 100)
    } else if (cuantityMod == "relative") {
        if (action == "up") {
            loudness.getVolume().then((vol) => {
                volAdjustNum = vol + vol * cauntityNum;
            })
        } else if (action == "down") {
            loudness.getVolume().then((vol) => {
                volAdjustNum = vol - vol * cauntityNum;
            })
        }
    }

}

module.exports = controlSettings;