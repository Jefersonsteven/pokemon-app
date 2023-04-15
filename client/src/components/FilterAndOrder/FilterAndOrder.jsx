import React from "react";
import { Arrow, Close_icon, Filter_icon, Order_icon } from '../index';
import { filterPerOrigin, filterPerTypes, orderAZorZA, orderAscendentOrDescendent, orderAttack, setCurrentPage } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function FilterAndOrder() {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    
    return (
        <div className="FilterAndOrder">
            <div className="Filter">
                <Filter_icon />
                <div className="Filter-options">
                    <Close_icon />
                    <select 
                        onChange={event => {
                                return dispatch(filterPerTypes(event.target.value))
                            }
                        }
                        >
                        <option value="Alls types">Alls types</option>
                        { types.length > 0 &&
                            types.map(type => 
                            <option 
                                key={type.id + "OPTUIID"} 
                                value={type.name}
                            >
                                {type.name}
                            </option>)
                        }
                    </select>
                    <select
                        onChange={event => {
                                return dispatch(filterPerOrigin(event.target.value))
                            }
                        }
                    >
                        <option value="Alls Origins">Alls Origins</option>
                        <option value="Data Base">Data base</option>
                        <option value="API">API</option>
                    </select>
                </div>
            </div>
            <div className="Order">
                <Order_icon />
                <div className="Filter-options">
                    <Close_icon />
                    <button onClick={() => dispatch(orderAscendentOrDescendent('Ascendent'))}>Ascendent<Arrow/></button>
                    <button onClick={() => dispatch(orderAscendentOrDescendent('Descendent'))}>Descendent <Arrow/></button>
                    <button onClick={() => dispatch(orderAZorZA("A-Z"))}>A - Z</button>
                    <button onClick={() => dispatch(orderAZorZA("Z-A"))}>Z - A</button>
                    <button onClick={() => dispatch(orderAttack("Lesser attack"))}>Lesser attack <Arrow/></button>
                    <button onClick={() => dispatch(orderAttack("Major attack"))}>Major attack <Arrow/></button>
                </div>
            </div>
        </div>
    );
}

export default FilterAndOrder;