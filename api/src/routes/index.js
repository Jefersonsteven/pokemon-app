const { Router } = require('express');
const pokemons = require('../routes/pokemons/routes/pokemons');

const router = Router();


router.use('/api/pokemons', pokemons);

module.exports = router;
