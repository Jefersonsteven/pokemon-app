const {Pokemon, Type} = require('../../../database/db');
const axios = require('axios');

class Pokemons {
    constructor(){
        this.API_URL = 'https://pokeapi.co/api/v2/pokemon';
    }

    // funcion que responde con 40 pokemons de la API y los que aiga en la base de datos. ✔️
    async findPokemons() {

        const dataDB = await Pokemon.findAll({ 
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        });
        const responseDB = dataDB?.map(data => {
            const { id, image, name, Types, attack } = data;
            return {
                id,
                image,
                name,
                Types: Types.map(type => type.name),
                attack
            }
        })

        const pokemons = await axios.get(`${this.API_URL}/?limit=60&offset=0`);
        const results = pokemons.data.results.map(pokemon => axios.get(pokemon.url));
        const dataAPI = await Promise.all(results);
        const responseAPI = dataAPI.map((data) => { 
            const { id, sprites, name, types, stats } = data.data;
            return {
                id,
                image: sprites.other.home.front_default,
                name, 
                Types: types.map(type => type.type.name),
                attack: stats[1].base_stat
            } 
        });

        if(dataDB) {
            return [...responseDB, ...responseAPI ]
        }
        return responseAPI;
    }

    // funcion que responde con 1 pokemon, lo busca en la API y en la base de datos. ✔️
    async findPokemonByID(req, res) {

        const { idPokemon } = req.params;

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
                Types: p.types.map(type => type.type.name)
            };
        } catch {
            const pokemon = await Pokemon.findByPk(idPokemon, {
                include: {
                    model: Type,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    }
                }
            });
            if (!pokemon) {
                throw Error("Pokemon Not found" );
            }
            const { id, name, image, up, attack, defense, speed, height, weight, Types } = pokemon;
            return { 
                id, name, image, up, attack, defense, speed, height, weight, 
                Types: Types.map(type => type.name)
            };
        }
    }

    // funcion que responde con un pokemon con el mismo nombre dado, lo busca en la base de datos y en la API ✔️
    async findPokemonForName(req, res) {
        const NAME = req.query.name;
        try {
            const pokemon = await axios.get(`${this.API_URL}/${NAME.toLowerCase()}`);
            const { id, name, types } = pokemon.data;
            return {
                id,
                name,
                Types: types.map(type => type.type.name)
            };
        } catch {
            const pokemon = await Pokemon.findOne({
                where: { name: NAME.toLowerCase() },
                include: {
                    model: Type,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    }
                }
            })
            if (!pokemon) {
                throw Error("Pokemon Not found");
            }
            const { id, Types } = pokemon;
            const nameBD = pokemon.name;
            return  {
                id,
                name: nameBD,
                Types: Types.map(type => type.name)
            };
        }
    }

    // funcion que responde con un pokemon creado en la base de datos. ✔️
    async createPokemon(req, res) {
        const {name,image,up,attack,defense,speed,height,weight,types} = req.body;
        if(name&&image&&up&&attack&&defense&&types) {
            const newPokemon = await Pokemon.create({
                name: name.toLowerCase(),
                image,
                up,
                attack,
                defense,
                speed: speed || null,
                height: height || null,
                weight: weight || null,
            })

            newPokemon.addTypes(types);

            return newPokemon;
        } else {
            throw Error('missing data');
        }
    }

    // funcion que responder con los types de la base de datos ✔️
    async findTypes() {
        const typesBD = await Type.findAll();
        if(typesBD.length === 0) {
            const data = await axios.get(`https://pokeapi.co/api/v2/type`);
            const types = data.data.results.map(type => { return {name: type.name} });
            const newTypes = await Type.bulkCreate(types);
            return newTypes;
        } 
        return typesBD;
    }
}


module.exports = Pokemons;