const axios = require('axios');
const ACCESS_TOKEN = 'BQAYKUJznW0UDj3KSkL_CEkwg0EbDL2D7iP19vByRs-MogJ_gsL8TgNWxvOnH5JHHgVWuV7yOpofLU5wdrOPOvjmVuwNgiu478g_tKXmhAsTJk8J4HVV0YhbRg76FuoGkHW4cTeIFlCYW8DQTu6jjkDW2LQyqyrsk8LGErfSzsNLEMLiP244yKLJGz2LCJxNWSkctTSvF_zkc-X7ng2pP2KAkovLPsR4bdf4Dgz5pokObkukQblXWKJhtWDntko4Tzy8bTFxUk8W4CRjhUovRmknPTMKqWdmOBOIvPFvRvlhklL2HzxcKs99RH3P0lzsUmJaz_B0g3wwacNhTdBxaQ';
async function getTrackId(title, artist) {
  const response = await axios.get('https://api.spotify.com/v1/search', {
    params: {
      q: `${title} ${artist}`,
      type: 'track'
    },
    headers: {
      Authorization: 'Bearer ' + ACCESS_TOKEN
    }
  });
  
  if (response.data && response.data.tracks && response.data.tracks.items && response.data.tracks.items.length > 0) {
    console.log(response.data.tracks.items[0].id)
    return response.data.tracks.items[0].id;
  } else {
    return null;
  }
}
// module.exports = getTrackId;

getTrackId('mama','kidd keo')