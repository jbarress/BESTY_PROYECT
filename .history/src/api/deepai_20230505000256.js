const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('7231c442-a43c-467f-a056-83400019ea10');

(async function() {
    var resp = await deepai.callStandardApi("text-generator", {
            text: "hola",
    });
    console.log(resp);
})()