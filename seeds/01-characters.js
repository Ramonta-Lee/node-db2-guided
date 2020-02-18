exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("characters")
    .truncate() // resets the id back to 1
    .then(function() {
      // Inserts seed entries
      return knex("characters").insert([
        {
          name: "Eddard",
          house: "Stark",
          origin: "The North",
          alive: false,
          sigil: "Wolf"
        },
        {
          name: "Jon",
          house: "Stark",
          origin: "The North",
          alive: true,
          sigil: "Wolf"
        },
        {
          name: "Arya",
          house: "Stark",
          origin: "The North",
          alive: true,
          sigil: "Wolf"
        }
      ]);
    });
};
