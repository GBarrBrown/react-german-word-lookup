const express = require('express')

const router = express.Router()

const db = require('./db/db')

router.use(express.json())

//set routes in here

router.get('/:search' ,(req, res) => {
    const search = req.params.search
    return db.searchWord(search)
    .then(results => {
        console.log(results)
        var finalResults = results
        results.length 
        ? results.map((gWord, i) => {
            return db.getTranslations(gWord.id)
            .then((res) => {
                console.log(res)
                res.map((translations) => {
                    return db.getEnglishById(translations.english_id)
                    .then((englishTranslation) => {
                        console.log(englishTranslation)
                        typeof finalResults[i].translations == 'object'
                        ? finalResults[i].translations.push(englishTranslation.word)
                        : finalResults[i].translations = [englishTranslation.word]
                    })
                })
            })
        }) : console.log('ahh, something went super wrong :)')
        console.log('final results', finalResults)
       return res.json(results) 
    })
})

module.exports = router