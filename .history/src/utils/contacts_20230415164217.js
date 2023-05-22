const axios = require('axios');
const Contacto = require('../../models/contact');

async function controlContacts(entities, traits, res) {
  var action = entities['action:action']?.[0]?.value;
  // var specific = entities['bd_especific:bd_especific']?.[0]?.value;
  var response;
  switch (action) {
    case 'show':
      res.render('index', { showContacts: true });
      response = 'Mostrando tu lista de contactos'
      break;
    case 'create':

      var nombre = entities['wit$contact:contact']?.[0]?.value;
      var numTel = entities['wit$phone_number:phone_number']?.[0]?.value;
      var email = entities['wit$email:email']?.[0]?.value;

      // Crear un objeto con los valores de las entidades
      const data = {
        nombre: nombre,
        telefono: numTel,
        email: email
      };

      // Realizar la solicitud POST utilizando axios
      await axios.post('http://localhost:8080/contactos', data)
        .then(response => {
          console.log(response.data);
          // Continuar con el proceso correspondiente.
          response = 'He guardado el contacto guardado correctamente'
        })
        .catch(error => {
          console.error(error);
          response = 'No he podido guardar el contacto'
          // Manejar el error de la solicitud.
        });

      break;
    case 'del':
      console.log('entra en del')
      var nombre = entities['wit$contact:contact']?.[0]?.value;
      // Busca el contacto por su nombre en la base de datos de MongoDB
      try {
        const contacto = await Contacto.findOne({ nombre: nombre });
        if (!contacto) {
          response = `El contacto con nombre ${nombre} no existe`;
        } else {
          await axios.delete(`http://localhost:8080/contactos/${contacto._id}`).then(() => {
            response = 'He eliminado el contacto';
          });
        }
      } catch (error) {
        console.error(error);
        response = 'No he podido eliminar el contacto';
      }
      break;

    case 'edit':
      var nombre = entities['wit$contact:contact']?.[0]?.value;
      var numTel = entities['wit$phone_number:phone_number']?.[0]?.value;
      var email = entities['wit$email:email']?.[0]?.value;

      const contacto = await Contacto.findOne({ nombre: nombre });

      const datosActualizados = {};

      // Si se reconoce un número de teléfono, actualizarlo en datosActualizados.
      if (numTel) {
        datosActualizados.telefono = numTel;
      } else {
        if(contacto.telefono){
          datosActualizados.telefono = contacto.telefono;
        }
      }

      // Si se reconoce un correo electrónico, actualizarlo en datosActualizados.
      if (email) {
        datosActualizados.email = email;
      } else {
        if(contacto.email!== null || contacto.email !== undefined){
          datosActualizados.email = contacto.email;
        }
      }

      // Actualizar el nombre en datosActualizados si se reconoció un nuevo nombre.
      if (nombre) {
        datosActualizados.nombre = nombre;
      } else {
        if(contacto.nombre){
          datosActualizados.nombre = contacto.nombre;
        }
      }

      await axios.put(`http://localhost:8080/contactos/${contacto._id}`, datosActualizados)
        .then(response => {
          console.log(response.data);
          response = 'He actualizado el contacto correctamente';
        })
        .catch(error => {
          console.error(error);
          response = 'No he podido actualizar el contacto';
        });

      break;
  }
  return response;
}



module.exports = controlContacts;