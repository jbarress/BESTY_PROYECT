const express = require('express');
const witQuery = require("../api/wit");
const witQuery = require("../api/chatbot");
const selectOrder = require("../utils/selector.js");
const main = require(__dirname + '/../src/utils/index.js');
const router = express();
router.post('/', async (req, res) => {
    const respuesta = await main(req.body.orden, res);
    res.render('index');
});
  

module.exports = router