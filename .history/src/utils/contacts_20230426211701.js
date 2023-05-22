const axios = require('axios');
const Contacto = require('../../models/contact');
const Transaccion = require('../../models/transaccion')
const conf = require('../../public/js/configuracion')

async function controlContacts(entities, traits, res) {

  var action = entities['action:action']?.[0]?.value;
  console.log(action);
  var respuesta
  switch (action) {

    case 'show':
      conf.showContacts = true;
      break;

    case 'hide':
      conf.showContacts = false;
      break;

    case 'create':

      var nombre = entities['wit$contact:contact']?.[0]?.value;
      var numTel = entities['wit$phone_number:phone_number']?.[0]?.value;
      var email = entities['wit$email:email']?.[0]?.value;

      console.log('entra en contactos')
      // Crear un objeto con los valores de las entidades
      const data = {
        nombre: nombre,
        telefono: numTel,
        email: email
      };

      try {
        const newContact = new Contacto(data);
        newContact.save();
        respuesta = 'He guardado el contacto correctamente'
      } catch (err) {
        console.error(err);
        respuesta = 'No he podido guardar el contacto'
      }

      break;

    case 'del':

      var nombre = entities['wit$contact:contact']?.[0]?.value;
      // Busca el contacto por su nombre en la base de datos de MongoDB
      if (!contacto) {
        respuesta = `El contacto con nombre ${nombre} no existe`;
      } else {
        const contactoBuscado = await Contacto.findOne({ nombre: nombre });
        Contacto.findByIdAndDelete(contactoBuscado._id);
      }

      break;
  }
  return await respuesta;
}



module.exports = controlContacts;