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
                                        <SearchIcon style={{ fill: "#1f74db", width: 40, height: 40 }} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button sx=
                        {{ color: "white", 
                        backgroundColor: "#1f74db", 
                        width: 30,

                        "&.MuiButtonBase-root:hover": {
                            backgroundColor: '#1f74db'
                        }
                    }}>
                        Go
                    </Button>
                </div>
            </div>
        </div>

    )
}


export default Searchbar;