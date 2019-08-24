let express = require('express');
let router = express.Router();

/*get a home page*/

let db = [];


/*HomePage*/
router.get('/', function(req,res){//function have two parameter, 
    res.render('index.html');
});

/*Task*/
router.get('/newTask', function(req,res){
    res.render('NewTask.html');
});

/*List Task*/
router.get('/listTasks', function(req,res){
    res.render('listTasks.html', {tasks : db});
});

router.post('/addTask', function (req, res) {
let data = {
    taskName: req.body.taskName,
    dueDate: req.body.dueDate,
    taskDesc: req.body.taskDesc,

};

db.push(data);
res.render('NewTask.html');

});

module.exports = router;
