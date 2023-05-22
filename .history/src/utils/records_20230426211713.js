const axios = require('axios');
const Record = require('../../models/record');
const moment = require('moment');
const chrono = require('chrono-node');
const chatbot = require("../api/chatbot.js");
const conf = require('../../public/js/configuracion')

async function controlRecords(entities, traits, res) {

    var action = entities['action:action']?.[0]?.value;

    var respuesta;

    switch (action) {
        case 'show':
            conf.showCalendar = true;
            break;
        case 'hide':
            conf.showCalendar = false;
            break;
        case 'create':

            console.log('entra en create');

            const startString = entities['wit$agenda_entry:agenda_entry']?.[0]?.value;
            var nombre = entities['tittle:tittle']?.[0]?.value;

            var dataChat = await chatbot("Transforma a formato fecha hora el siguiente input: '" + startString + "'" + ". Deseo que tu respuesta tan solo sea la transformacion del input a su respectivo forato, no digas nada mas porfavor")

            const results = chrono.parse(dataChat);
            if (results.length === 0) {
                console.log('No se pudo extraer una fecha y hora de la cadena de texto');
            }

            console.log(dataChat)

            const startMoment = moment(results[0].start.date());
            const endMoment = startMoment.clone().add(1, 'hours');

            const start = startMoment.format('YYYY-MM-DDTHH:mm:ss');
            const end = endMoment.format('YYYY-MM-DDTHH:mm:ss');

            const data = {
                title: nombre,
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

            break;

        case 'del':

            var nombre = entities['tittle:tittle']?.[0]?.value;
            // Busca el contacto por su nombre en la base de datos de MongoDB
            try {
                const record = await Record.findOne({ title: nombre });
                if (!record) {
                    respuesta = `El recordatorio con ${nombre} no existe`;
                } else {
                    Record.findByIdAndDelete(record._id);
                    respuesta = 'He eliminado el recordatorio';
                }
            } catch (error) {
                respuesta = 'No he podido eliminar el recordatorio';
            }
            break;

    }
    return await respuesta;
}


module.exports = controlRecords;