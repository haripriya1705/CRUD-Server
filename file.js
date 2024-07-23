
//Importing express framework - to setup server

const express = require('express')

//Initializing server that's gonna allow us to receive requests and send response
const app = express()

//The port value should be above 1024
const port = 3001

app.get('/home', (req, res) => {
  res.send('Hello')
})

app.get('/dog', (req, res) => {
    res.send({"hey": 23})
})

app.get('/dog/:name', (req, res) => {
    res.status(200).send(req.params.name)

    // res.sendStatus(200)

    //This will translate what is sent into JSON
    res.json()

    //Will end the response process without sending any data
    res.end()
})
// app.METHOD('PATH', () => {
    //logic
    //send back a response
    //res.send(<data>)    
//})

//Binding the server to a port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})