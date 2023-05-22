const express = require('express');
const Evento = require('../models/contact.js');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});


app.post('/', async (req, res) => {
    const { nombre, email, telefono } = req.body; // Obtén el título y la fecha del cuerpo de la solicitud
    const evento = new Evento({ title, start, end }); // Crea un nuevo objeto de evento con los datos
    try {
        const resultado = await evento.save(); // Guarda el evento en la base de datos
        res.status(200).send(resultado); // Devuelve una respuesta exitosa con el evento guardado
    } catch (error) {
        console.log(error); 
        res.status(500).send({ error: `Error al guardar el contacto: ${error}` }); // Devuelve un error si no se pudo guardar el evento
    }
});
module.exports = app;