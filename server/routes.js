const express = require('express')

const router = express.Router()

const db = require('./db/db')

router.use(express.json())

//set routes in here

router.get('/:search' ,(req, res) => {
    console.log(req.params.search)
    // const search = JSON.stringify(req.params.search)
    const search = req.params.search
    console.log(search)
    db.searchWord(search)
    .then(results => {
       res.json(results) 
    })
    
})

module.exports = router