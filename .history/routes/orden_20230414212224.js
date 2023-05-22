const express = require('express');
const witQuery = require("../src/api/wit.js");
const chatbot = require("../src/api/chatbot.js");
const selectOrder = require("../src/utils/selector.js");
const router = express();

router.post('/', async (req, res) => {
    var dataWit = await witQuery(req.body.orden)
    console.log(dataWit)
    if(dataWit.intents[0].name == 'chat'){
      var dataChat = await chatbot(req.body.orden)
      res.render('index', {respuestaBot: dataChat})
    }else{
      console.log(dataWit);
      var dataSelector = await selectOrder(dataWit);
      res.render('index', {respuestaBot: dataSelector})
    }
});
  

module.exports = router