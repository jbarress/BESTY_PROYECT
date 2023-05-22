const witQuery = require("../api/wit");
const selectOrder = require("../utils/selector.js");

async function main(orden){
    var dataWit = await witQuery(orden);
    var data = await selectOrder(dataWit);
console.log(dataWit);
}

module.exports = main;
