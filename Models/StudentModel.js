const express = requires('express')
const mongoose = require('mongoose')

const Student = mongoose.Schema({
    Name: {
        "type" : "String",
        "required" : true
    },
    rollno: {
        "type" : "String",
        "required" : true
    }
})