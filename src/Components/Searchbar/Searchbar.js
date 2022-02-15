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
                        className="muiSearchField"
                        placeholder="What is the product you are looking for?"
                        type="search"
                        sx={{ 
                            width: "100%",
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "white",
                                '&:hover': {
                                    borderRight: "none"
                                }
                            },
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderRight: "none"
                            },
                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                borderRight: "none",
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon style={{ fill: "#1f74db", width: 40, height: 40 }} />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button sx=
                        {{ color: "white", 
                        backgroundColor: "#1f74db", 
                        width: "10%",
                        fontWeight: "bold",
                        fontSize: "16px",
                        fontFamily: "Georgia",
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