const express = require('express');
const witQuery = require("../src/api/wit.js");
const chatbot = require("../src/api/chatbot.js");
const selectOrder = require("../src/utils/selector.js");
const router = express();

router.post('/', async (req, res) => {
    var dataWit = await witQuery(req.body.orden)
    if(dataWit.intents[0].name == 'chat'){
      var dataChat = await chatbot(req.body.orden)
      res.render('index', {response: dataChat})
    }
});
  

module.exports = router