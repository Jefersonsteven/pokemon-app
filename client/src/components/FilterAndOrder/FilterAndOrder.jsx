import React from "react";
import { Arrow, Close_icon, Filter_icon, Order_icon } from '../index';
import { filterPerOrigin, filterPerTypes, orderAscendentOrDescendent } from "../../redux/actions";
import { useDispatch } from "react-redux";

function FilterAndOrder({types}) {
    const distpatch = useDispatch();
    
    return (
        <div className="FilterAndOrder">
            <div className="Filter">
                <Filter_icon />
                <div className="Filter-options">
                    <Close_icon />
                    <select 
                        onChange={event => {
                                return distpatch(filterPerTypes(event.target.value))
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
                            console.log(event.target.value);
                                return distpatch(filterPerOrigin(event.target.value))
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
                    <button onClick={() => distpatch(orderAscendentOrDescendent('Ascendent'))} >Ascendent<Arrow/></button>
                    <button onClick={() => distpatch(orderAscendentOrDescendent('Descendent'))}>Descendent <Arrow/></button>
                    <button>A - Z</button>
                    <button>Z - A</button>
                    <button>Lesser attack <Arrow/></button>
                    <button>Major attack <Arrow/></button>
                </div>
            </div>
        </div>
    );
}

export default FilterAndOrder;