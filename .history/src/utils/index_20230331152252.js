const witQuery = require("../api/wit");
const selecOrder = require("../src/selector.js");

async function main(orden){
    var dataWit = await witQuery(orden);
    var dataSelectedOrder = await selectOrder(dataWit.intents);
    return dataWit;
}

module.exports = main;
