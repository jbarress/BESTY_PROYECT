const express = require('express');
const witQuery = require("../api/wit");
const witQuery = require("../api/chatbot");
const selectOrder = require("../utils/selector.js");

const main = require(__dirname + '/../src/utils/index.js');
const router = express();
router.post('/', async (req, res) => {
    var dataWit = await witQuery(orden)
    var ret = await selectOrder(dataWit, res);
    if(ret==true){
        return true;
    }
});
  

module.exports = router