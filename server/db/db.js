const config = require('../../knexfile').development
const connection = require('knex')(config)

module.exports = {
    searchWord
}

function searchWord(searchStr, db = connection) {
    return db('german_words').where('word', 'like', ''+searchStr+'%').select()
}