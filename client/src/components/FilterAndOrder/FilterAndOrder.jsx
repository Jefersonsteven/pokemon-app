import React, {useState} from "react";
import { Arrow, Close_icon, Filter_icon, Order_icon } from '../index';
import { filterPerOrigin, filterPerTypes, orderAZorZA, orderAscendentOrDescendent, orderAttack, setCurrentPage } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function FilterAndOrder() {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const [ openFilter, setOpenFilter ] = useState(false);
    const [ openOrder, setOpenOrder ] = useState(false);
    
    function handlerOpenFilter() {
        openFilter ? setOpenFilter(false) : setOpenFilter(true)
    }

    function handlerOpenOrder() {
        openOrder ? setOpenOrder(false) : setOpenOrder(true)
    }

    return (
        <div className="FilterAndOrder">
            <div className="Filter">
                <div onClick={handlerOpenFilter}>
                    <Filter_icon />
                </div>
                {openFilter &&
                    <div className="Filter-options">
                    <div onClick={handlerOpenFilter}>                        
                        <Close_icon />
                    </div>
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
                </div>}
            </div>
            <div className="Order">
                <div onClick={handlerOpenOrder}>
                    <Order_icon />
                </div>
                {openOrder &&
                <div className="Filter-options">
                    <div onClick={handlerOpenOrder}>                        
                        <Close_icon />
                    </div>
                    <button onClick={() => dispatch(orderAscendentOrDescendent('Ascendent'))}>Ascendent<Arrow/></button>
                    <button onClick={() => dispatch(orderAscendentOrDescendent('Descendent'))}>Descendent <Arrow/></button>
                    <button onClick={() => dispatch(orderAZorZA("A-Z"))}>A - Z</button>
                    <button onClick={() => dispatch(orderAZorZA("Z-A"))}>Z - A</button>
                    <button onClick={() => dispatch(orderAttack("Lesser attack"))}>Lesser attack <Arrow/></button>
                    <button onClick={() => dispatch(orderAttack("Major attack"))}>Major attack <Arrow/></button>
                </div>}
            </div>
        </div>
    );
}

export default FilterAndOrder;