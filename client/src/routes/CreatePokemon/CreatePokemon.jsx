import React, { useState } from "react";
import { Arrow, Polygon, UserAdd } from '../../components';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findTypes } from "../../redux/actions";
import validateForm from "../../assets/valideForm";

function CreatePokemon() {

    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    if (types.length === 0) {
        dispatch(findTypes('http://localhost:3001/api/pokemons/types/'));
    }


    const [ created, setCreated ] = useState({});
    const [sendTypes, setSendTypes] = useState([]);
    const [form, setForm] = useState({
        name: '',
        image: '',
        up: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: []
    });
    const [errors, setErrors] = useState({
        name: '',
        image: '',
        up: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: '',
        form: ''
    });



    function handleForm(event) {
        const name = event.target.name;
        const value = event.target.value;
        const f = event.target.form;

        setForm({ ...form, [name]: value, types: sendTypes });
        validateForm(
            {
                [f[0].name]: f[0].value,
                [f[1].name]: f[1].value,
                [f[2].name]: f[2].value,
                [f[3].name]: f[3].value,
                [f[4].name]: f[4].value,
                [f[5].name]: f[5].value,
                [f[6].name]: f[6].value,
                [f[7].name]: f[7].value,
                types: sendTypes
            },
            errors,
            setErrors
        );
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if(validateForm(form, errors, setErrors)) {
            const { name,image,up,attack,defense,speed,height,weight,types } = form;
            const response = await fetch('http://localhost:3001/api/pokemons', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.toLowerCase(),
                    image,
                    up: Math.floor(up),
                    attack: Math.floor(attack),
                    defense: Math.floor(defense),
                    speed: Math.floor(speed),
                    height: Math.floor(height),
                    weight: Math.floor(weight),
                    types
                })
            })
            const data = await response.json();
            setForm({
                name: '',
                image: '',
                up: 0,
                attack: 0,
                defense: 0,
                speed: 0,
                height: 0,
                weight: 0,
                types: []
            })
            setCreated({name: data.data.name});
        }
    }

    function handleCheckbox(event) {
        const checked = event.target.checked;
        const value = event.target.value;
        if (checked) {
            setSendTypes([...sendTypes, Math.floor(value)])
        } else {
            const types = sendTypes;
            const index = types.findIndex(type => type === Math.floor(value));
            types.splice(index, 1);
            setSendTypes([ ...types ])
        }
    }

    return (
        <div>
            { created?.name &&
                <div>
                    <div className="Created">
                        <div>
                            <h2>Created</h2>
                            <p>Pokemon: {created.name}</p>
                            <Link to="/home">
                                <button>Good</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
            <div className="Back">
                <Link to="/home">
                    <Arrow />
                </Link>
            </div>
            <div>
            <div className="types_select">
                        <p>Types</p>
                        <div className="types">
                            {types.length > 0 &&
                                types.map(type => {
                                    return (
                                        <div key={type.id}>
                                            <input
                                                onChange={handleCheckbox}
                                                type="checkbox"
                                                name={type.name}
                                                value={type.id}
                                            />
                                            <span>{type.name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <span>{errors.types}</span>
                    </div>
                <form onChange={handleForm} onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder="Name" name="name" />
                        <span>{errors.name}</span>
                    </div>

                    <div>
                        <input type="text" placeholder="Image Link" name="image" />
                        <span>{errors.image}</span>
                    </div>

                    <div>
                        <input type="number" min="0" max="270" placeholder="up" name="up" />
                        <span>{errors.up}</span>
                    </div>

                    <div>
                        <input type="number" min="0" max="300" placeholder="Attack" name="attack" />
                        <span>{errors.attack}</span>
                    </div>

                    <div>
                        <input type="number" min="0" max="250" placeholder="Defense" name="defense" />
                        <span>{errors.defense}</span>
                    </div>

                    <div>
                        <input type="number" min="0" max="300" placeholder="Speed" name="speed" />
                        <span>{errors.speed}</span>
                    </div>

                    <div>
                        <input type="number" min="0" max="18" placeholder="Height" name="height" />
                        <span>{errors.height}</span>
                    </div>

                    <div>
                        <input type="number" min="0" max="1000" placeholder="Weight" name="weight" />
                        <span>{errors.weight}</span>
                    </div>

                    <span>{errors.form}</span>

                    <button>
                        <UserAdd />
                        <p>Create Pokemon</p>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreatePokemon;

