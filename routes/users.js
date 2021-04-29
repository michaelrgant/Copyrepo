const router = require('express').Router()



router.get('/', (req, res,) => {
      res.send('/users/')
})


router.get('/:id', (req, res,) => {
       res.send('hello world')
})

router.post('/', (req, res,) => {
    
})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res,) => {

})


module.exports = router


