const express = require('express')

const router = express.Router()

const db = require('./db/db')

router.use(express.json())

//set routes in here

router.get('/:id' ,(req, res) => {
    console.log(req.params.id)
    const id = JSON.stringify(req.params.id)
    res.json(id)
})

module.exports = router