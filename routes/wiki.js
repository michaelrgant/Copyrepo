const route = require('express').Router()
const wikipage = require('../views/wikipage')

route.get('/', (req, res) => {
  //   res.send(wikipage())
  res.send('/wiki page')
})

// localhost:3000/ post<
route.post('/', (req, res) => {
  res.send('/wiki post')
})

route.get('/add', (req, res) => {
  res.send('wiki/add')
})

module.exports = route
