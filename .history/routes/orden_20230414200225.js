const express = require('express');
const witQuery = require("../src/api/wit");
const chatbot = require("../src/api/chatbot");
const selectOrder = require("../utils/selector.js");
const router = express();

router.post('/', async (req, res) => {
    var dataWit = await witQuery(req.body.orden)
    console.log(dataWit);
});
  

module.exports = router