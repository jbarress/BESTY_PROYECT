
const getTrackId = require("../api/spotify.js");

async function controlMusic(entities) {

    var action = entities['action:action']?.[0]?.value;

    switch (action) {
        case "active":
            var tittle = entities['tittle:tittle']?.[0]?.value;
            var artist = entities['artist:artist']?.[0]?.value;

            var trackId = getTrackId(tittle, artist);
            return trackId;
    }
}