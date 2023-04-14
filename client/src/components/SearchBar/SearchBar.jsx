import React from "react";
import Search_icon from "../svgs/Search_icon";

function SearchBar() {
    return ( 
        <div className="SearchBar">
            <input type="text" placeholder="search pokemon"/>
            <button>
                <Search_icon/>
            </button>
        </div>
    );
}

export default SearchBar;