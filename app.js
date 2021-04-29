const express = require('express')
const morgan = require('morgan')
const path = require('path')
const layOut = require('./views/layout')
const { db, Page, User } = require('./models')
const app = express()

const Port = 3000

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

db.authenticate().then(() => {
  console.log('connected to the database')
})
app.use('/wiki', require('./routes/wiki'))

app.use('/users', require('./routes/users'))

app.get('/', (req, res, next) => {
  res.redirect('/wiki')
})

const init = async () => {
  await Page.sync({ force: true })
  await User.sync({ force: true })
  // await db.sync({ force: true })
  app.listen(Port, () => {
    console.log(`Listening on http://localhost:${Port}`)
  })
}

init()
