function getColorPerType(type) {
    switch (type) {
        case "normal":
            return "#A8A090";

        case "fighting":
            return "#A05038";

        case "flying":
            return "#98A8F0";

        case "poison":
            return "#B058A0";

        case "ground":
            return "#7c7257";

        case "rock":
            return "#B8A058";

        case "bug":
            return "#A8B820";

        case "ghost":
            return "#6060B0";

        case "steel":
            return "#A8A8C0";

        case "fire":
            return "#F05030";

        case "water":
            return "#3899F8";

        case "grass":
            return "#78C850";

        case "electric":
            return "#F8D030";

        case "psychic":
            return "#F870A0";

        case "ice":
            return "#58C8E0";

        case "dragon":
            return "#7860E0";

        case "dark":
            return "#424242";

        case "fairy":
            return "#E79FE7";

        case "unknown":
            return "#F2F2F2";

        case "shadow":
            return "#7A5848";

        default:
            return "#B80000";
    }
}

export default getColorPerType;
