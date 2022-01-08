const express = require("express");
const app = express()

function logger(req,res,next) {
    console.table({"url":req.url,"method":req.method})
    next()
}

app.get("/",(req,res)=> {
    res.send("<h1 style='color:red'>Hello bou7mid</h1>")

})

app.get('/style.css',(req,res) => {
    res.sendFile(__dirname + "/public/style.css")
})

app.get('/home',logger,(req,res) => {
    res.sendFile(__dirname + '/public/home.html')

})

app.get('/contact',logger,(req,res) => {
    res.sendFile(__dirname + '/public/contact.html')

})

app.get('/services',(req,res) => {
    res.sendFile(__dirname + '/public/services.htm')
})



const PORT = 5000;
app.listen(PORT,err =>  err ? console.error(err) : console.log(`Server is runing on port ${PORT}`))