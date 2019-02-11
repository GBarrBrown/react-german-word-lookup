const express = require('express')

const router = express.Router()

const db = require('./db/db')

router.use(express.json())

//set routes in here

router.get('/:search' ,(req, res) => {
    const search = req.params.search
    db.searchWord(search)
    .then(results => {
       return res.json(results) 
    })
})

module.exports = router