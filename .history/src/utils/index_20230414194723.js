const witQuery = require("../api/wit");
const witQuery = require("../api/chatbot");
const selectOrder = require("../utils/selector.js");

async function main(orden , res){
    var dataWit = await witQuery(orden)
    var ret = await selectOrder(dataWit, res);
    if(selectOrder==true){
        return true
    }
}

module.exports = main;
