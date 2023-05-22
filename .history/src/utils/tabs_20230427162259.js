
const chatbot = require("../api/chatbot.js");
const conf = require('../../public/js/configuracion')

async function controlTabs(entities, traits, res) {

    var action = entities['action:action']?.[0]?.value;
    var id;
    var respuesta = '';
    switch (action) {
        case "open":
            var object = entities['object:object']?.[0]?.value;
            var dataChat = await chatbot("Podrias escribir el link para acceder a la pagina de "+object)
            var link = extraerURL(dataChat);
            conf.url = link;
            respuesta = 'Abriendo '+object
    }
    return await respuesta;
}
function extraerURL(texto) {
    const expresionRegular = /(https?:\/\/\S+)/gi;
    const coincidencias = texto.match(expresionRegular);
    if (coincidencias) {
      return coincidencias[0];
    } else {
      return null;
    }
  }
  
module.exports = controlTabs;