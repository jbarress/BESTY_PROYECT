const witQuery = require("../api/wit");
const selectOrder = require("../src/selector.js");

async function main(orden){
    var dataWit = await witQuery(orden);
    var dataSelectedOrder = await selectOrder(dataWit);
    return dataWit;
}

module.exports = main;
