const express = require('express')
const Port = 5025;
const app = express();

app.listen(Port , () => {
    console.log("Server listening to port " , Port);
})

app.get('/api/students' , (req , res) => {
    res.send("Hello world")
})
app.post('/api/students' , () => {
    
})
app.put('/api/students' , () => {
    
})
app.delete('/api/students' , () => {
    
})