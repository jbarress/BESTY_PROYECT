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
            conf.showCalendar = true;
            break;
        case 'hide':
            conf.showCalendar = false;
            break;
        case 'create':

            console.log(entities)
            var date = entities['date:date']?.[0]?.value;
            var timeEnt = entities['time:time']?.[0]?.value;
            var time = aux.extractNumber(timeEnt).toString();
            var meridian = entities['time:time']?.[0]?.value;
            var nombre = entities['tittle:tittle']?.[0]?.value;

            // console.log(date, time, meridian, nombre)
            // aux.combineDateAndTime(date, time, meridian)
            // console.log(aux.combineDateAndTime(date, time, meridian))

            // const data = {
            //     title: nombre,
            //     start: start,
            //     end: end
            // };
            // console.log(data)

            // try {
            //     const nuevoRecord = new Record(data);
            //     await nuevoRecord.save();
            //     console.log('guardado')
            //     respuesta = 'He guardado la recordatorio correctamente'
            // } catch (err) {
            //     console.error('nene');
            //     respuesta = 'No he podido guardar el recordatorio'
            // }

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