import React, { useState, useCallback } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField, IconButton, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import "./Searchbar.css";
import Solutions from '../../Pages/Solutions/Solutions';




function Searchbar({page, resetPage}) {
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState("")
    const [sol, setSol] = useState("")
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "2bc9qNxIb21xzyqgyqLc9530yGcTSdVG2Nk0wx5e");
    myHeaders.append("Content-Type", "application/json");
    const navigate = useNavigate();

    

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://as3op0zurd.execute-api.us-east-1.amazonaws.com/prod/commercial_marketplace/", {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify({
                    searchString: search,
                    k: "3",
                    path: "/postText"
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setSearch("")
                console.log(resJson)
                setSearchData(resJson)
                
                navigate('/solutions', {state:{data: resJson}});
                window.location.reload(false)
                setSol("") //re-render
            } else {
                console.log("POST ERROR")
            }
            console.log('END FUNCTION')
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="searchBar">
            <div className="searchInputs">
                <TextField
                    className="muiSearchField"
                    placeholder="What is the product you are looking for?"
                    type="search"
                    onChange={(e) => { setSearch(e.target.value); console.log(search) }}
                    sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                            backgroundColor: "white",
                            width: "100%",
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
                        },
                        "& .MuiOutlinedInput-input .MuiInputBase-input": {
                            width: "100%"
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon style={{ fill: "#30cddc", width: '3vw', height: '3vw' }} />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <Button type="submit"
                    onClick={handleSubmit}
                    sx=
                    {{
                        color: "white",
                        backgroundColor: "#30cddc",
                        width: "10%",
                        fontWeight: "bold",
                        fontSize: "1vw",
                        fontFamily: "arial",
                        textTransform: "none",
                        "&.MuiButtonBase-root:hover": {
                            backgroundColor: '#1f74db'
                        }
                    }}>
                    Go
                </Button>

            </div>
        </div>
    )
}


export default Searchbar;
