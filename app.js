const express = require("express");
const morgan = require("morgan")
const path = require("path")
const layOut = require("./views/layout")
const { db } = require('./models');
const app = express()

const Port = 3000;

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.get('/', (req, res, next) => {
    res.send(layOut('hello world'))
})




app.listen(Port, () => {
    console.log(`Listening on http://localhost:${Port}`)
})

