const router = require('express').Router()
const wikipage = require('../views/wikipage')
const { Page } = require("../models");
const { addPage } = require("../views");

router.get('/', (req, res) => {
  //   res.send(wikipage())
  res.send('/wiki page')
})

// localhost:3000/ post<
router.post('/', async(req, res, next) => {
 console.log(req.body)

    try {
      
      const page = await Page.create({
        title: req.body.title,
        content: req.body.content
      })
      res.redirect('/')
    } catch (error) {
      next(error)
    }
})

router.get('/add', (req, res) => {
  res.send(addPage())
})

module.exports = router
