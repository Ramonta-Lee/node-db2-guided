// describe changes to apply to the database
// knex migrate:latest
exports.up = function(knex) {
  // do NOT forget to RETURN
  return knex.schema.createTable("characters", tbl => {
    // adds an id column that auto-increments
    tbl.increments(); // primary key

    tbl
      .string("name", 256)
      .notNullable()
      .index(); // makes searching by name faster

    tbl.string("house", 128);
    tbl.string("origin", 256);
    tbl.boolean("alive").defaultTo(true);
  });
};

// how to undo the changes =>
// knex migrate:rollback
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("characters");
};
