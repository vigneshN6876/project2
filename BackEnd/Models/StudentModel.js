const express = require('express')
const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
    Name: {
        type : String,
        required : true
    },
    rollno: {
        type : String,
        required : true
    }
})

module.exports =  mongoose.model("Student" , StudentSchema) 