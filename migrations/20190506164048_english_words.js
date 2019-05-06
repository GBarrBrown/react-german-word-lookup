
exports.up = function(knex, Promise) {
    return knex.schema.createTable('english_words', (table) => {
        table.increments('id').primary()
        table.string('word')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('english_words')
};
