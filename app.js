var express = require('express');
let bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

//setup the view Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//setup the static assets directories
app.use(express.static('images'));
app.use(express.static('css'));
app.use(express.static('view'));

let showView = __dirname +"/views/";

let db = [];


/*HomePage*/
app.get('/', function(req,res){//function have two parameter, 
    res.sendFile(showView + 'index.html');
});

/*Task*/
app.get('/newTask', function(req,res){
    res.sendFile(showView +'NewTask.html');
});

/*List Task*/
app.get('/listTasks', function(req,res){
    res.render('listTasks.html', {tasks : db});
});

app.post('/addTask', function (req, res) {
let data = {
    taskName: req.body.taskName,
    dueDate: req.body.dueDate,
    taskDesc: req.body.taskDesc,

};

db.push(data);
res.sendFile(showView + 'NewTask.html');

});


app.listen("8080");
console.log("Server running at http://localhost:8080");