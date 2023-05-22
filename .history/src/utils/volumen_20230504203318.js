const aux = require("../utils/auxiliarFunctions");
const loudness = require("loudness");
function controlVolumen(entities, traits , res) {

    console.log(entities)
    var action = entities['action:action'][0].value;
    var cuantityType = entities['cuantity:cuantity'][0].entities['especific_cuantity:especific_cuantity'][0].value;
    var cuantityStr = entities['cuantity:cuantity'][0].value
    var cuantity = aux.extractNumber(cuantityStr)
    console.log(cuantity, action, cuantityType)

    if (cuantityType == 'absolut') {
        loudness.setVolume(cuantity);
    } else if (cuantityType == "relative") {
        if (action == "up") {
            loudness.getVolume().then((vol) => {
                console.log(vol)
                volAdjustNum = vol + (vol * cuantity)/100;
                loudness.setVolume(volAdjustNum);
            })
        } else if (action == "down") {
            loudness.getVolume().then((vol) => {
                volAdjustNum = vol - (vol * cuantity)/100;
                loudness.setVolume(volAdjustNum);
            })
        }
    }

    return "volumen ajustado correctamente"

}


module.exports = controlVolumen;