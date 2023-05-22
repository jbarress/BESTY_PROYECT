const axios = require('axios');

const apiKey = '7231c442-a43c-467f-a056-83400019ea10'; // Reemplaza esta clave con tu propia clave de API de DeepAI
const url = 'https://api.deepai.org/api/text-generator';

async function generarTexto() {
  try {
    const respuesta = await axios({
      method: 'POST',
      url: url,
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/x-www-form-urlencoded',
        'client-library': 'axios'
      },
      data: {
        text: 'hola'
      }
    });

    console.log(respuesta.data);
  } catch (error) {
    console.error(error);
  }
}

generarTexto();
