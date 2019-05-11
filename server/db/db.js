const config = require('../../knexfile').development
const connection = require('knex')(config)

module.exports = {
    searchQueryGerman,
    getTranslations,
    getEnglishById
}

function searchQueryGerman(searchStr, db = connection) {
    return db('german_words')
    .where('word', 'like', ''+searchStr+'%')
    .select()
}

function getTranslations(gWordId, db = connection) {
    return db('translation_lookup')
    .where('german_id', gWordId)
    .select()
    .then((translationIds) => {
        return Promise.all(translationIds.map((translation, i) => {
            return getEnglishById(translation.english_id)
            .then((englishTranslationResults) => {
                return englishTranslationResults
            })
        }))
    })
}

function getEnglishById(english_id, db = connection) {
    return db('english_words')
    .where('id', english_id)
    .select('word')
    .then((wordObjArr) => {
        return wordObjArr[0].word
    })
}