const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("../routes/index.js");
const { conn } = require("../database/db.js");
const cors = require("cors");
const Pokemons = require("../routes/pokemons/services/pokemons.service.js");

require("../database/db.js");

const server = express();
const port = 3001;

server.name = "API";

conn.sync({ alter: true }).then(() => {
    server.use(express.json());
    server.use(cors());
    server.use(morgan("dev"));
    server.listen(port);
    server.use("/", routes);
});

// load database types with api types
const pokemons = new Pokemons();
pokemons.findTypes();

// Error catching endware.
server.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;
