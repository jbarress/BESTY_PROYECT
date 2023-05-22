
function selectOrder(data){

    var intent = data.intents[0].name

    switch(intent){
        case "settings":
            console.log("son settings");
    }
}

module.exports = selectOrder;