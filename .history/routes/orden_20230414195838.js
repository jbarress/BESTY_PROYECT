const express = require('express');
const witQuery = require("../api/wit");
const witQuery = require("../api/chatbot");
const selectOrder = require("../utils/selector.js");
const router = express();

router.post('/', async (req, res) => {
    var dataWit = await witQuery(req.body.orden)
    
});
  

module.exports = router