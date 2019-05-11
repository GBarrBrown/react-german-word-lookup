
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('english_words').del()
    .then(function () {
      // Inserts seed entries
      return knex('english_words').insert([
        {id: 1, word: 'I'},
        {id: 2, word: 'You'},
        {id: 3, word: 'The'}
      ]);
    });
};
