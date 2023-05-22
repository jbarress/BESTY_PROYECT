const axios = require('axios');
const Record = require('../../models/record');
const chatbot = require("../api/chatbot.js");
const conf = require('../../public/js/configuracion');
const aux = require("../utils/auxiliarFunctions");

async function controlRecords(entities, traits, res) {

    var action = entities['action:action']?.[0]?.value;

    var respuesta;

    switch (action) {
        case 'show':
            try{
                conf.showCalendar = true;
            }catch(err){
                respuesta = "No puedo mostrar los recordatorios"
            }
            
            break;
        case 'hide':
            conf.showCalendar = false;
            break;
        case 'create':

            try {
                var date = entities['date:date']?.[0]?.value;
                var timeEnt = entities['time:time']?.[0]?.value;
                var time = aux.extractNumber(timeEnt).toString();
                var meridian = entities['time:time']?.[0]?.entities['especific_time:especific_time'][0].value;
                var nombre = entities['tittle:tittle']?.[0]?.value;

                var start = aux.combineDateAndTime(date, time, meridian);
                var end = new Date(start.getTime() + (60 * 60 * 1000)); // 1 hora en milisegundos = 60 minutos x 60 segundos x 1000 milisegundos

                const data = {
                    title: nombre,
                    start: start,
                    end: end
                };
                const nuevoRecord = new Record(data);
                await nuevoRecord.save();
                respuesta = 'He guardado la recordatorio correctamente'
            } catch (err) {
                respuesta = 'No he podido guardar el recordatorio'
            }

            break;

        case 'del':
            try {
                var nombre = entities['tittle:tittle']?.[0]?.value;
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
        default:
            respuesta = 'No he podido ejecutar el comando';

    }
    return await respuesta;
}


module.exports = controlRecords;