const {Pokemon} = require('../../../database/db');
const axios = require('axios');

class Pokemons {
    constructor(){
        this.API_URL = 'https://pokeapi.co/api/v2/pokemon';
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
                    type: p.types.map(type => type.type.name)
                };
            } catch {
                const pokemon = await Pokemon.findByPk(idPokemon);
                if (!pokemon) {
                    throw Error("Pokemon Not found" );
                }
                return pokemon;
            }
        } else {
            throw Error('has to be a number');
        }
    }

    async findPokemonForName(req, res) {
        const { name } = req.query;
        try {
            const pokemon = await axios.get(`${this.API_URL}/${name.toLowerCase()}`);
            return pokemon.data;
        } catch (error) {
            const pokemon = await Pokemon.findOne({
                where: { name: name.toLowerCase() }
            })
            if (!pokemon) {
                throw Error("Pokemon Not found" );
            }
            return pokemon;
        }
    }

    // async createPokemon(req, res) {
    //     const {id,name,image,up,attack,defense,speed,height,weight,type} = req.body;
    //     const pokemon = 
    // }
}


module.exports = Pokemons;