var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const port = 3000
var mongoose = require('mongoose');
var Student = require('./models/student');


//var student = require('routes');
var app = express();

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/test';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//get request for home path
app.get('/', (req, res) => {
  res.send('Hello World!')
})

/*
//http://localhost:3000/students
app.get('/students', (req, res) => {
    res.send('Hello from students page response!')
})
*/

//http://localhost:3000/students
app.get('/students', (req, res, next) => {
  Student.find(function(err,students) {
    if(err) return next(err);
    res.json(students)
  })
})

//http://localhost:3000/students/62f24142ed03d885bd9d2c00
app.get('/students/:id', (req, res, next) => {
  Student.findById(req.params.id, function(err,students) {
    if(err) return next(err);
    res.json(students)
  })
})

//http://localhost:3000/students/101
app.get('/users/:rollno', (req, res, next) => {
  Student.find({ rollno: req.params.rollno}
    , function(err,students) {
    if(err) return next(err);
    res.json(students)
  })
})

/*
//http://localhost:3000/students/rajesh
app.get('/students/:name', (req, res) => {
    const name = req.params.name;
    res.send('Hello from students page response!'+name)
})
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;