const axios = require('axios');
const Transaccion = require('../../models/transaccion');
const Contacto = require('../../models/contact');
const conf = require('../../public/js/configuracion')

async function controlTransacciones(entities, traits, res) {

    var action = entities['action:action']?.[0]?.value;
    var respuesta;

    switch (action) {
        case 'show':
            conf.showTransacciones = true;
            respuesta = "Mostrando transacciones";
            break;
        case 'hide':
            conf.showTransacciones = false;
            respuesta = "Ocultando transacciones";
            break;
        case 'create':

            console.log('entra en create')
            var monto = entities['wit$amount_of_money:amount_of_money']?.[0]?.value;
            var categoria = entities['tittle:tittle']?.[0]?.value;
            var tipo = entities['object:object']?.[0]?.value;

            const data = {
                monto: monto,
                categoria: categoria,
                tipo: tipo
            };

            try {
                const nuevaTransaccion = new Transaccion(data);
                await nuevaTransaccion.save();
                respuesta = 'He guardado la transacción correctamente'
            } catch (err) {
                console.error(err);
                respuesta = 'No he podido guardar la transacción'
            }

            break;

        case 'del':
            var monto = entities['wit$amount_of_money:amount_of_money']?.[0]?.value;
            var categoria = entities['tittle:tittle']?.[0]?.value;
            var tipo = entities['object:object']?.[0]?.value;

            try {
                const transaccion = await Transaccion.findOne({categoria: categoria });
                if (!transaccion) {
                    respuesta = 'No se encontró la transacción';
                } else {
                    await Transaccion.findByIdAndDelete(transaccion._id)
                    respuesta = 'He eliminado la transacción';
                }
            } catch (err) {
                console.error(err);
                respuesta = 'No he podido eliminar la transacción';
            }

            break;
        default: 
            respuesta = "No entiendo la orden sobre los transacciones, se mas específico"
    }
    return respuesta;
}

module.exports = controlTransacciones;