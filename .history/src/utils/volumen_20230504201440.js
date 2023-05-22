function controlVolum(entities) {
    var action = entities['action:action'][0].value;
    var cuantityStr = entities['cuantity:cuantity'][0].body;
    var cuantityType = entities['cuantity:cuantity'][0].value;
    var cuantityMod = entities['settings_cuantity_type:settings_cuantity_type'][0].value;

    console.log(action + "," + cuantityStr + "," + cuantityType + "," + cuantityMod)

    var cauntityNum = convertToNumber(cuantityStr);
    console.log(cauntityNum)
    if (cuantityMod == 'absolut') {
        loudness.setVolume(cauntityNum * 100);
    } else if (cuantityMod == "relative") {
        if (action == "up") {
            loudness.getVolume().then((vol) => {
                volAdjustNum = vol + vol * cauntityNum;
                loudness.setVolume(volAdjustNum);
            })
        } else if (action == "down") {
            loudness.getVolume().then((vol) => {
                volAdjustNum = vol - vol * cauntityNum;
                loudness.setVolume(volAdjustNum);
            })
        }
    }

    return "volumen ajustado correctamente"

}