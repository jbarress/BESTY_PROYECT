const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const index = require(__dirname+'/routes/index');
const calendar= require(__dirname+'/routes/calendar');
const conf = require(__dirname+'/public/js/configuracion.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/asistente');
let app = express();

conf.inicializar();
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
app.use('/calendar', calendar)

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
  process.exit(1);
});


app.listen(8080);