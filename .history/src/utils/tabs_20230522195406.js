
const chatbot = require("../api/chatbot.js");
const conf = require('../../public/js/configuracion')

async function controlTabs(entities, traits, res) {

    var action = entities['action:action']?.[0]?.value;
    var respuesta = '';
    switch (action) {
        case "open":
          try{
            var object = entities['object:object']?.[0]?.value;
            var link = extraerURL(chatbot("Escribe el url de "+ object+" porfavor no escribas nada mas, tu respuesta la usare de manera que si escribes algo mas que la url mi codigo no funcionara"))
            conf.url = link;
            respuesta = 'Abriendo '+object;
          }catch(err){
            respuesta = "Error al abrir "+object
          }

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