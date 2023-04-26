import './CreatePokemon.scss';

import React, { useEffect, useState } from "react";
import { Arrow, UserAdd } from '../../components';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findTypes, findPokemons } from "../../redux/actions";
import validateForm from "../../assets/valideForm";
import { setNamePokemonForBD, setNamePokemonForClient } from '../../assets/setName';
import getColorPerType from '../../assets/getColorPerType';
import { URL } from '../../redux/actions';

function CreatePokemon() {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);

    // * -------------------------- * //

    const [created, setCreated] = useState({});
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

    // * -------------------------- * //

    useEffect(() => {
        dispatch(findPokemons());
    }, [created]);
    if (types.length === 0) {
        dispatch(findTypes());
    }

    // * -------------------------- * //

    // handler Checkbox
    function handleCheckbox(event) {
        const checked = event.target.checked;
        const value = event.target.value;
        if (checked) {
            setSendTypes([...sendTypes, Math.floor(value)])
        } else {
            const types = sendTypes;
            const index = types.findIndex(type => type === Math.floor(value));
            types.splice(index, 1);
            setSendTypes([...types]);
        }
    }

    // Form Validation
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

    // handler Submit
    async function handleSubmit(e) {
        e.preventDefault();
        if (validateForm(form, errors, setErrors)) {
            const { name, image, up, attack, defense, speed, height, weight, types } = form;
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: setNamePokemonForBD(name),
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
            const f = e.target
            f[0].value = null;
            f[1].value = null;
            f[2].value = null;
            f[3].value = null;
            f[4].value = null;
            f[5].value = null;
            f[6].value = null;
            f[7].value = null;

            data.data ? setCreated({ name: setNamePokemonForClient(data.data.name) }) : setCreated(data)
        }
    }


    return (
        <div className='CreatePokemon'>

            {(created?.name || created?.message) &&
                <div className="Created_Container">
                    <div className="Created">
                        <div>
                            {created.name ? <h2>Created</h2> : <h2>Error</h2>}
                            {created.name ? <p>Pokemon: {created.name}</p> : <p>Pokemon Exist: {created.message}</p>}
                            <Link to="/home">
                                <button>Home</button>
                            </Link>
                            <button onClick={() => setCreated({})}>Create another</button>
                        </div>
                    </div>
                </div>}

            <div className="Back">
                <Link to="/home">
                    <Arrow />
                </Link>
            </div>

            <div className='Form'>

                <div className="Types-select">
                    <p>Types</p>
                    <div className="Types">
                        {types.length > 0 &&
                            types.map(type => {
                                return (
                                    <div key={type.id} style={{ backgroundColor: getColorPerType(type.name) }}>
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
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Name" name="name" id='name' />
                        <span>{errors.name}</span>
                    </div>

                    <div>
                        <label htmlFor='image'>Image</label>
                        <input type="text" placeholder="Image Link" name="image" id='image' />
                        <span>{errors.image}</span>
                    </div>

                    <div>
                        <label htmlFor='up'>Hp</label>
                        <input type="number" min="0" max="270" placeholder="up" name="up" id='up' />
                        <span>{errors.up}</span>
                    </div>

                    <div>
                        <label htmlFor='attack'>Attack</label>
                        <input type="number" min="0" max="300" placeholder="Attack" name="attack" id='attack' />
                        <span>{errors.attack}</span>
                    </div>

                    <div>
                        <label htmlFor='defense'>Defense</label>
                        <input type="number" min="0" max="250" placeholder="Defense" name="defense" id='defense' />
                        <span>{errors.defense}</span>
                    </div>

                    <div>
                        <label htmlFor='speed'>Speed</label>
                        <input type="number" min="0" max="300" placeholder="Speed" name="speed" id='speed' />
                        <span>{errors.speed}</span>
                    </div>

                    <div>
                        <label htmlFor='height'>Height</label>
                        <input type="number" min="0" max="18" placeholder="Height" name="height" id='height' />
                        <span>{errors.height}</span>
                    </div>

                    <div>
                        <label htmlFor='weight'>Weight</label>
                        <input type="number" min="0" max="1000" placeholder="Weight" name="weight" id='weight' />
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

