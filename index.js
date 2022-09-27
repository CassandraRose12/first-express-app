//Require needed modules
const express = require('express')

// Initialize the app object
const app = express()

//create a homepage route
app.get('/', function (req, res){
    //this gets sent to the client 
    //(your web browser most likely!)
    res.send('Hello world')
})
//listen for connections
//app.listen(3001)

//create second route
app.get('/second', function (req, res){
    res.send('My Second Page!')
})

// or this Listen for connections.
app.listen(3001, function () {
    console.log('I am awake!')
})
