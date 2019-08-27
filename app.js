var express = require('express');
let bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

//ssS
//setup the view Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//setup the static assets directories
app.use(express.static('images'));
app.use(express.static('css'));

let showView = __dirname +"/views/";

let db = [];


/*HomePage*/
app.get('/', function(req,res){//function have two parameter, 
    console.log(showView);
    res.sendFile(showView + "index.html");
});

/*Task*/
app.get('/newTask', function(req,res){
    console.log(showView);
    res.sendFile(showView +"NewTask.html");
});

/*List Task*/
app.get('/listTasks', function(req,res){
    console.log(showView);
    res.render("listTasks", {tasks : db});
});

app.post('/addTask', function (req, res) {
let data = {
    taskName: req.body.taskName,
    dueDate: req.body.dueDate,
    taskDesc: req.body.taskDesc,

};

db.push(data);
res.sendFile(showView + "NewTask.html");

});


app.listen("8080");
console.log("Server running at http://localhost:8080");