import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField, IconButton, Button } from '@mui/material';
import styles from "./Searchbar.css";


function Searchbar({ placeholder, data }) {
    return (
        <div className="wrap">
            <div className="searchBar">
                <div className="searchInputs">
                    <TextField
                        placeholder="What is the problem you are looking to solve or product you are searching for?"
                        type="search"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon style={{fill: "#1f74db", width: 40, height: 40}}/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment>
                                    <Button>
                                        Go
                                    </Button>
                                </InputAdornment>
                            )
                        }}
                    />
                    {/* <button type="submit" className="searchButton">
                        <SearchIcon />
                    </button>
                    <input
                        type="text"
                        placeholder={placeholder}>
                    </input>
                    <button type="submit">Go</button> */}
                </div>
            </div>
        </div>

    )
    // return (
    //     <TextField
    //         label="With normal TextField"
    //         InputProps={{
    //             endAdornment: (
    //                 <InputAdornment>
    //                     <IconButton>
    //                         <SearchIcon />
    //                     </IconButton>
    //                 </InputAdornment>
    //             )
    //         }}
    //     />
    // )
}


export default Searchbar;