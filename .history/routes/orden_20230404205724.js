const express = require('express');

const main = require(__dirname + '/../src/utils/index.js');
const router = express();
router.post('/', async (req, res) => {
    const respuesta = await main(req.body.orden, res);
    res.render('index', { respuestaBot: respuesta });
  });
  

module.exports = router