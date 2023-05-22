
const getTrackId = require("../api/spotify.js");
const conf = require('../../public/js/configuracion')

async function controlMusic(entities) {

    var action = entities['action:action']?.[0]?.value;
    var id;
    switch (action) {
        case "active":
            var tittle = entities['tittle:tittle']?.[0]?.value;
            var artist = entities['artist:artist']?.[0]?.value;
            var respuesta = "Reproduciendo la cancion "+tittle+" de "+artist;
            id = await getTrackId(tittle, artist);
            if(id){
                conf.idMusic = id;
            }
    }
    return await respuesta;
}

module.exports = controlMusic;