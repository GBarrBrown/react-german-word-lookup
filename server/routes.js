const express = require('express')

const router = express.Router()

const db = require('./db/db')

router.use(express.json())

//set routes in here

router.get('/:search' ,(req, res) => {
    const search = req.params.search
    let output;

    db.searchQueryGerman(search)
    .then((searchResults) => {
        output = searchResults
        return Promise.all(searchResults.map((germanWord, i) => {
            return db.getTranslations(germanWord.id)
            .then((translationResults) => {
                output[i].translations = translationResults
                return translationResults
            })
        }))
    })
    .then(() => {
        console.log('-- OUTPUT -- \n',output)
        res.json(output)
    })
})

module.exports = router