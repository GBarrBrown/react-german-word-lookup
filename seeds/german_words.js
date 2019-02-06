
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('german_words').del()
    .then(function () {
      // Inserts seed entries
      return knex('german_words').insert([
        {id: 1, word: 'Die', gender: 'Feminine'},
        {id: 2, word: 'Das', gender: 'Neuter'},
        {id: 3, word: 'Der', gender: 'Masculine'},
        {id: 4, word: 'Du', gender: 'NA'},
        {id: 5, word: 'Ich', gender: 'NA'}
      ]);
    });
};
