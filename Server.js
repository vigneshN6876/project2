const express = require('express')
const Port = 5025;
const app = express();
const Student = require('../project2/Models/StudentModel')
const mongoose = require('mongoose')
app.use(express.json())
app.listen(Port , () => {
    console.log("Server listening to port " , Port);
})
mongoose.connect('mongodb://localhost:27017/studentsdb')
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    console.log(err);
})
app.get('/api/students' , async (req , res) => {
    try {
        const studetails = await Student.find();
        if(!studetails){
                res.status(400).json({message : "no details found"});
        }
        res.send(studetails)
    } catch (error) {
        res.status(400).json({message : "no details found"});
    }
})
app.post('/api/students' , async (req , res) => {
    try {
        const {Name , rollno } = req.body;
        const studentdetails = new Student({Name , rollno});
            studentdetails.save()
        res.send(studentdetails)
    } catch (error) {
        res.status(400).json({message : error.message});
    }
})
app.put('/api/students/:id' , async (req , res) => {
    try {
        const {Name , rollno} = req.body
        const updated = await Student.findByIdAndUpdate(req.params.id , {Name , rollno})
        if(!updated){
            res.send("no data to be updated")
        }
        res.send(updated)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})
app.delete('/api/students' , () => {
    
})