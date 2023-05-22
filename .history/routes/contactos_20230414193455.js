const express = require('express');
const Contacto = require('../models/contact.js');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});


app.post('/', async (req, res) => {
    const { nombre, email, telefono } = req.body; // Obtén el título y la fecha del cuerpo de la solicitud
    const contacto = new Contacto({ nombre, email, telefono }); // Crea un nuevo objeto de evento con los datos
    try {
        const resultado = await contacto.save(); // Guarda el evento en la base de datos
        res.status(200).send(resultado); // Devuelve una respuesta exitosa con el evento guardado
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: `Error al guardar el contacto: ${error}` }); // Devuelve un error si no se pudo guardar el evento
    }
});

app.delete('/:nombre', async (req, res) => {
    const nombre = req.params.nombre;
    try {
        const contacto = await Contacto.findOne({ nombre: nombre });
        if (!contacto) {
            return res.status(404).send({ error: `El contacto con nombre ${nombre} no existe.` });
        }
        const resultado = await Contacto.findByIdAndDelete(contacto._id);
        res.status(200).send(resultado);
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: `Error al eliminar el contacto con nombre ${nombre}: ${error}` });
    }
});


module.exports = app;