const { Router } = require('express');
const Pokemons = require('../services/pokemons.service');
const newPokemons = new Pokemons();

const pokemons = Router();


pokemons.get('/name', async (req, res) => {
    try {
        const pokemon = await newPokemons.findPokemonForName(req, res);
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

pokemons.get('/types', async (req, res) => {
    try {
        const types = await newPokemons.findTypes(req, res);
        res.json(types);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

pokemons.get('/', async (req, res) => {
    try {
        const pokemons = await newPokemons.findPokemons();
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

pokemons.get('/:idPokemon', async (req, res) => {
    try {
        const pokemon = await newPokemons.findPokemonByID(req, res);
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

pokemons.post('/', async (req, res) => {
    try {
        const pokemon = await newPokemons.createPokemon(req, res);
        res.status(201).json({
            message: 'created',
            data: pokemon
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports = pokemons;