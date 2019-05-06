
exports.up = function(knex, Promise) {
    return knex.schema.createTable('translation_lookup', (table) => {
        table.increments('id').primary()
        table.integer('german_id')
        table.integer('english_id')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('translation_lookup')
};
