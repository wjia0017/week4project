var express = require('express');
var router = require('./router.js'); 
var app = express();
let bodyParser = require('body-parser');


//setup the view Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//setup the static assets directories
app.use(express.static('images'));
app.use(express.static('css'));
app.use(express.static('view'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', router);
app.listen("8080");
console.log("Server running at http://localhost:8080");