const express = require('express')
const cors = require('cors')
const app = express()
const fruitRouter = require('./routes/fruitrouter')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}))
app.use(express.json())
app.use('/fruits', fruitRouter)

module.exports = app

