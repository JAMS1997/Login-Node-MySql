//1 - invocamos a express
const express = require('express');
const app = express();

//2 - seteamos urlencode para capturar los datos del formulario 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//3 - Invocamos dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'});

//4 - el directorio public
app.use('/resources',express.static('public'));
app.use('/resources',express.static(__dirname+'/public'));


//5 . establecemos el motor de plantillas
app.set('view engine','ejs');

//6 - Invocamos a bcryptjs
const bcryptjs = require('bcryptjs');

//7 - Var. de sesion
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized:true
}));

//8 - Invocamos al modulo de conexion de la BD
const connection = require('./database/db')

//9 - Estableciendo las rutas
app.get('/',(req , res)=>{
    res.render('index', {msg:'Esto es un mensaje desde node'});
})
app.get('/login',(req , res)=>{
    res.render('login');
})
app.get('/register',(req , res)=>{
    res.render('register');
})

app.listen(3000,(req, res)=>{
    console.log("server is running on port 3000");
})