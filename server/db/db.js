const config = require('../../knexfile').development
const connection = require('knex')(config)

module.exports = {
    searchWord,
    getTranslations,
    getEnglishById
}

function searchWord(searchStr, db = connection) {
    return db('german_words')
    .where('word', 'like', ''+searchStr+'%')
    .select()
}

function getTranslations(gWordId, db = connection) {
    return db('translation_lookup')
    .where('german_id', gWordId)
    .select()
}

function getEnglishById(id, db = connection) {
    return db('english_words')
    .where('id', id)
    .select()
}