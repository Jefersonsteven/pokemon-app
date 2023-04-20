const server = require('./src/server/server.js');
const { conn } = require('./src/database/db.js');

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(3003, () => {
    console.log('%s listening at 3003'); // eslint-disable-line no-console
  });
});
