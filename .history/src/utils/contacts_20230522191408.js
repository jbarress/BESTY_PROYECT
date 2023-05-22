const axios = require('axios');
const Contacto = require('../../models/contact');
const Transaccion = require('../../models/transaccion')
const conf = require('../../public/js/configuracion')
const chatbot = require("../api/chatbot.js");

async function controlContacts(entities, traits, res) {

  var action = entities['action:action']?.[0]?.value;
  var respuesta
  switch (action) {

    case 'show':
      conf.showContacts = true;
      respuesta = chatbot('Imagina que eres un asistente virtual. Escribe la respuesta que darias para confirmar que has mostrado los contactos')
      break;

    case 'hide':
      conf.showContacts = false;
      break;

    case 'create':
      try {
        var nombre = entities['wit$contact:contact']?.[0]?.value;
        var numTel = entities['wit$phone_number:phone_number']?.[0]?.value;
        var email = entities['wit$email:email']?.[0]?.value;
        const data = {
          nombre: nombre,
          telefono: numTel,
          email: email
        };
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
      if (!nombre) {
        respuesta = 'Por favor, especifique el nombre del contacto que desea eliminar.';
      } else {
        const contactoBuscado = await Contacto.findOne({ nombre: nombre });
        if (!contactoBuscado) {
          respuesta = `El contacto con nombre ${nombre} no existe`;
        } else {
          await Contacto.findByIdAndDelete(contactoBuscado._id);
          respuesta = `El contacto ${nombre} ha sido eliminado.`;
        }
      }
      break;

    case 'edit':

      var nombre = entities['wit$contact:contact']?.[0]?.value;
      var numTel = entities['wit$phone_number:phone_number']?.[0]?.value;
      var email = entities['wit$email:email']?.[0]?.value;

      if (!nombre) {
        respuesta = 'Por favor, especifique el nombre del contacto que desea modificar.';
      } else {
        const contactoBuscado = await Contacto.findOne({ nombre: nombre });

        if (!contactoBuscado) {
          respuesta = `El contacto con nombre ${nombre} no existe`;
        } else {
          var contactoModificado = await Contacto.findById(contactoBuscado._id);

          if (numTel) {
            contactoModificado.telefono = numTel;
          }

          if (email) {
            contactoModificado.email = email;
          }

          await contactoModificado.save();

          respuesta = `El contacto ${nombre} ha sido modificado.`;
        }
      }
    default:
      respuesta = "No entiendo la orden sobre los contactos, se mas especifico";

  }
  return await respuesta;
}



module.exports = controlContacts;