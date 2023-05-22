
const getTrackId = require("../api/spotify.js");

async function controlMusic(entities) {

    var action = entities['action:action']?.[0]?.value;
    var id;
    switch (action) {
        case "active":
            var tittle = entities['tittle:tittle']?.[0]?.value;
            var artist = entities['artist:artist']?.[0]?.value;

            id = await getTrackId(tittle, artist);
    }
    return await id;
}

module.exports = controlMusic;