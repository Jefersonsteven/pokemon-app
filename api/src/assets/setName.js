function setNamePokemonForClient(name) {
    const lowercase = name.toLowerCase();
    const eliminateHyphes = lowercase.trim().split('-').join(' ');

    return eliminateHyphes;
}

module.exports = setNamePokemonForClient;