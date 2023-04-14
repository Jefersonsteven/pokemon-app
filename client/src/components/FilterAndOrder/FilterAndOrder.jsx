import React from "react";
import { Arrow, Close_icon, Filter_icon, Order_icon } from '../index';

function FilterAndOrder() {
    return (
        <div className="FilterAndOrder">
            <div className="Filter">
                <Filter_icon />
                <div className="Filter-options">
                    <Close_icon />
                    <select name="Types" id="">
                        <option value="Types">Types</option>
                    </select>
                    <select name="Origin" id="">
                        <option value="Origin">Origin</option>
                        <option value="Data Base">Data base</option>
                        <option value="API">API</option>
                    </select>
                </div>
            </div>
            <div className="Order">
                <Order_icon />
                <div className="Filter-options">
                    <Close_icon />
                    <button>Ascendent <Arrow/></button>
                    <button>Descendent <Arrow/></button>
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