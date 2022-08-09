var mongoose = require('mongoose');

/*
var StudentSchema = new mongoose.Schema({
  id: String,
  name: String,
  subject: String,
  description: String,
  join_year: String,
  address: { street:String, state: String },
  updated_date: { type: Date, default: Date.now },
});
*/

//db.students.insertMany([{rollno: "101", name:"Raju", subject: "Maths"}, {rollno: "102", name : "Rajesh", subject : "computer science"}])
//db.students.insertMany([{rollno: 101, name:"Raju", subject: "Maths"}, {rollno: 102, name : "Rajesh", subject : "computer science"}])
var StudentSchema = new mongoose.Schema({
    rollno: Number,
    name: String,
    subject: String,
});

module.exports = mongoose.model('Student', StudentSchema);