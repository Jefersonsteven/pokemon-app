export function setNamePokemonForBD(name) {
    const lowercase = name.toLowerCase();
    const eliminateSpaces = lowercase.trim().split(' ').join('-');

    return eliminateSpaces;
}

export function setNamePokemonForClient(name) {
    const lowercase = name.toLowerCase();
    const eliminateHyphes = lowercase.trim().split('-').join(' ');

    return eliminateHyphes;
} 