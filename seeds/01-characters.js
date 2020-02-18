exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("characters")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("characters").insert([
        { colName: "rowValue1" },
        { colName: "rowValue2" },
        { colName: "rowValue3" }
      ]);
    });
};
