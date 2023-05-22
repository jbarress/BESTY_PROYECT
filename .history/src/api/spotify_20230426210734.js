const axios = require('axios');
const ACCESS_TOKEN = 'BQC2dnhMuHfH2ReXhGl25mSef9cykRsyC6pjhFTPPS-fsKr4Z2YLUgtS8M8R8gg8amhjJl1Z9G5MRFTzJOIGqLuE8kPfFhAHPMjOs52EbMVT6lxYMoa3W4zyXC7i1wVq3b1WxHUAjlAwUgliDClhqi8HkQ36QtbKL4BVCGqbSm8m2-mJGHsy1bGNNcZVAt_GqfNZx9w0f4a5kuEC_4SeFm_Y8r_UuGVpFDYJsvxiYodk-uwaysu1MByxoLMqOKCLPED71ZbHTv2bFYOJR_LOo2gnUyUVY2bEYyTNvVjNJUr-YCk7VMyP4qup4Mm0QMmfdwpUkQ4k7u7ECwUhrCUDgQ';
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