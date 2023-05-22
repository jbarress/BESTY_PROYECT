const axios = require('axios');
const Record = require('../../models/record');
const momentLib = require('moment');
const chrono = require('chrono-node');
const chatbot = require("../api/chatbot.js");
const conf = require('../utils/confHorario');

async function controlHorario(entities, traits, res) {

    var date = entities['date:date']?.[0]?.value;
    var time = entities['time:time']?.[0]?.value;
    var tittle = entities['tittle:tittle']?.[0]?.value;
    var day;
    if (date) {
        day = date;
        conf.day = date;
    } else {
        day = conf._day;
    }
    let numbers = time.match(/\d+/g);
    console.log(numbers)
    var start = await transformDate(numbers[0], day);
    var end = await transformDate(numbers[1], day);
    
    const data = {
        title: tittle,
        start: start,
        end: end
    };

    try {
        const nuevoRecord = new Record(data);
        await nuevoRecord.save();
        console.log('guardado')
        respuesta = 'He guardado la recordatorio correctamente'
    } catch (err) {
        console.error('nene');
        respuesta = 'No he podido guardar el recordatorio'
    }

    console.log(data)
    return 'horario';
}
async function transformDate(number, dayStr) {
    var referenceDate = new Date();
    console.log(referenceDate.getMonth())
    var dataChat = await chatbot("Transforma a formato (año-mes-dia hora:minutos:segundos) el siguiente input: '" + dayStr + 'a las ' + number + "'" + ". Deseo que tu respuesta tan solo sea la transformacion del input a su respectivo formato y en horario español, no digas nada mas porfavor, recuerda que estamos en la ultima semana de abril del 2023")
    console.log(dataChat)
    const dateDef = chrono.parseDate(dataChat, { timezone: 'Europe/Madrid', locale: 'es'})
    const moment = momentLib(dateDef);
    const date = moment.format('YYYY-MM-DDTHH:mm:ss');
    console.log(moment)
    return date;
}
module.exports = controlHorario;