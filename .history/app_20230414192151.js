const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const tareas = require(__dirname+'/routes/tareas');
const index = require(__dirname+'/routes/index');
const orden= require(__dirname+'/routes/orden');
const evento= require(__dirname+'/routes/eventos');
const evento= require(__dirname+'/routes/contacto');

console.log(__dirname)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/asistente');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public', {
    setHeaders: (res, path, stat) => {
      if (path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
      }
    }
  }));
app.use(bodyParser.json());
app.use('/', index);
app.use('/tareas', tareas);
app.use('/orden', orden);
app.use('/eventos', evento)
app.use('/contactos', contacto)

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
  process.exit(1);
});


app.listen(8080);