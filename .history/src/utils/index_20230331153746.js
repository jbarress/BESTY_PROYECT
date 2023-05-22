const witQuery = require("../api/wit");
const selectOrder = require("../utils/selector.js");

async function main(orden){
    var dataWit = await witQuery(orden)
    await selectOrder(dataWit)
}

module.exports = main;
