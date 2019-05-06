
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('translation_lookup').del()
    .then(function () {
      // Inserts seed entries
      return knex('translation_lookup').insert([
        {id: 1, german_id: 1, english_id: 3},
        {id: 2, german_id: 2, english_id: 3},
        {id: 3, german_id: 3, english_id: 3},
        {id: 4, german_id: 4, english_id: 2},
        {id: 5, german_id: 5, english_id: 1}
      ]);
    });
};
