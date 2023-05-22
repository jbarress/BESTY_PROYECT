// Importa los módulos necesarios
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const ejs = require('ejs');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Configuración de la base de datos de MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/passport-example', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Definición del modelo de usuario
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String
}));

// Configuración de Passport.js
passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({ username: username })
    .then(user => {
      if (!user) {
        return done(null, false, { message: 'Nombre de usuario incorrecto' });
      }

      bcrypt.compare(password, user.password)
        .then(result => {
          if (!result) {
            return done(null, false, { message: 'Contraseña incorrecta' });
          }

          return done(null, user);
        })
        .catch(err => done(err));
    })
    .catch(err => done(err));
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => done(err));
});

// Configuración de Express
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Rutas
app.get('/', (req, res) => {
  res.render('index', { user: req.user });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username: username })
    .then(existingUser => {
      if (existingUser) {
        return res.status(400).send('El usuario ya existe');
      }

      bcrypt.hash(password, 10)
        .then(hashedPassword => {
          const newUser = new User({
            username: username,
            password: hashedPassword
          });

          newUser.save()
            .then(() => res.redirect('/login'))
            .catch(err => res.status(500).send('Error en el servidor'));
        })
        .catch(err => res.status(500).send('Error en el servidor'));
    })
    .catch(err => res.status(500).send('Error en el servidor'));
});

// Middleware para proteger rutas
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}

app.get('/protected', isAuthenticated, (req, res) => {
  res.send('Ruta protegida');
});

// Iniciar servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});