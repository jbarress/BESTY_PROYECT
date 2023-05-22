const express = require('express');
const witQuery = require("../src/api/wit.js");
const chatbot = require("../src/api/chatbot.js");
const selectOrder = require("../src/utils/selector.js");
const Contacto = require("../models/contact.js");
const Transaccion = require('../models/transaccion.js');
const conf = require('../public/js/configuracion.js');
const router = express();


router.get('/getConf', async (req, res)=>{
  const valores = conf.valores;
  res.json(valores);
})


router.get('/', async (req, res) => {
  var contactos = await Contacto.find();
  var transacciones = await Transaccion.find();
  res.render('index', {contactos, transacciones});
})

router.post('/', async (req, res) => {
  var orden = req.body.orden;
  if (!orden) {
    res.render('index', {
      contactos: await Contacto.find(),
      transacciones: await Transaccion.find(),
      respuestaBot: 'Por favor, introduzca una orden válida.'
    });
    return;
  }
  var dataWit = await witQuery(req.body.orden)
  var contactos = await Contacto.find();
  var transacciones = await Transaccion.find();
  if (dataWit.intents[0]?.name === 'chat' || !dataWit.intents[0]) {
    var dataChat = await chatbot(req.body.orden)
    res.render('index', { respuestaBot: dataChat, contactos, transacciones })
  } else if(dataWit!=undefined){
    var dataSelector = await selectOrder(dataWit, res, orden);
    res.render('index', {respuestaBot: dataSelector, contactos, transacciones});
  }else{
    res.render('index', {contactos, transacciones});
  }
});




module.exports = router