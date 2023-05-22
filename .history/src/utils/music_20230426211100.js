
const getTrackId = require("../api/spotify.js");

async function controlMusic(entities) {

    var action = entities['action:action']?.[0]?.value;
    var id;
    switch (action) {
        case "active":
            var tittle = entities['tittle:tittle']?.[0]?.value;
            var artist = entities['artist:artist']?.[0]?.value;

            id = getTrackId(tittle, artist);
    }
    return id;
}

module.exports = controlMusic;