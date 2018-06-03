const express = require('express');
const myConnection = require('express-myconnection');
const path = require('path');
const mysql = require('mysql');
const app = express();

const routersUser = require('./routes/users');

// configuraciones
app.set('port', process.env.PORT || 3000); 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'usercrud'
}) );
app.use(express.urlencoded({extended: false})); // para mandar datos

// routes
app.use('/', routersUser);


// archivos estaticos
app.use(express.static(path.join(__dirname, 'public') ) ); // inject js, etc...


// init server
app.listen(app.get('port'), () => {
    console.log('probando ' + app.get('port'));
    
});
