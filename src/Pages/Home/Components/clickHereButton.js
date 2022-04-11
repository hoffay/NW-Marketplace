import React from 'react';
import { Button, TextField } from '@mui/material';
import '../App.css';
import './clickHereButton.css';

function CLButtonClick(CLButton) {window.location.replace("/solutions");}

function CLButton() {
    return (
        <div className = "center">
        <><div className = "textAdj1">
            Looking for something else?
        </div><>
        <Button
            sx={{
                color: 'black',
                fontFamily: 'Calibri',
                backgroundColor: "white",
                fontWeight: 'bold',
                textDecorationLine: 'underline',
                fontSize: '2vw',
                display: 'inline-block',
                alignContent: 'center',
                color: '#30cddc',
                textTransform: 'none',
                bottom: '.5vw',
                '&:hover': {
                    backgroundColor: 'white',}
            }}
            onClick={CLButtonClick}>
            Click here
        </Button>
        <default className = "textAdj2">
            to browse through our most trending searches...
        </default></></>
        </div>
    );
}

export default CLButton;
