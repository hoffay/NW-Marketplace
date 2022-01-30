import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./Searchbar.css";


function Searchbar({ placeholder, data }) {
    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}>
                </input>
                <button type="submit" className="searchButton">
                    <SearchIcon />
                </button>
            </div>
        </div>
    )
}


export default Searchbar;