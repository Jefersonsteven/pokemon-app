const {Pokemon} = require('../../../database/db');
const axios = require('axios');

class Pokemons {
    constructor(){
        this.API_URL = 'https://pokeapi.co/api/v2/pokemon';
        this.pokemons = []
        this.peticions = []
    }

    async findPokemons() {
        const pokemons = await axios.get(`${this.API_URL}/?limit=12&offset=0`);
        return pokemons.data;
    }

    async findPokemon(req, res) {
        const { idPokemon } = req.params;
        if(Number(idPokemon)) {
            try {
                const pokemon = await axios.get(`${this.API_URL}/${idPokemon}`);
                const p = pokemon.data;
                return { 
                    id: p.id,
                    name: p.name,
                    image: p.sprites.other.home.front_default,
                    up: p.stats[0].base_stat,
                    attack: p.stats[1].base_stat,
                    defense: p.stats[2].base_stat,
                    speed: p.stats[5].base_stat || null,
                    height: p.height || null,
                    weight: p.weight || null,
                    types: p.types
                };
            } catch {
                const pokemon = await Pokemon.findByPk(idPokemon);
                if (!pokemon) {
                    res.status(404).json({ message: "Pokemon Not found" });
                }
                return pokemon;
            }
        } else {
            throw Error('Tiene que ser un numero');
        }
    }
}


module.exports = Pokemons;