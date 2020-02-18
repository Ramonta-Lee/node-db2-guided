// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/got.db3"
    },
    useNullAsDefault: true // only needed for SQLite
  }
};
