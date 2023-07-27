const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

 const {getHomePage} = require('./routes/index');
 const {addAltaPage, addAlta, deleteAlta, editAlta, editAltaPage} = require('./routes/altas');
 const {getHerramientaPage} = require('./routes/indexherramientas');
 const {addHerramientaPage, addHerramienta, deleteHerramienta, editHerramienta, editHerramientaPage} = require('./routes/herramienta');
const port = 5000;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventario'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app
app.get('/', getHomePage);
app.get('/add', addAltaPage);
app.get('/edit/:id', editAltaPage);
app.get('/delete/:id', deleteAlta);
app.post('/add', addAlta);
app.post('/edit/:id', editAlta);
app.get('/h', getHerramientaPage);
app.get('/addHerramienta', addHerramientaPage);
app.get('/editHerramienta/:id_herramienta', editHerramientaPage);
app.get('/deleteHerramienta/:id_herramienta', deleteHerramienta);
app.post('/addHerramienta', addHerramienta);
app.post('/editHerramienta/:id_herramienta', editHerramienta);



// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});