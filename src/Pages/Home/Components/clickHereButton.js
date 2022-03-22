import React from 'react';
import { Button, TextField } from '@mui/material';
import '../App.css';

function CLButtonClick(CLButton) {window.location.replace("/solutions");}

function CLButton() {
    return (
        <div className = "center">
        <><div class = "textAdj1">
            Looking for something else?
        </div><>
        <Button
            sx={{
                color: 'black',
                fontFamily: 'Calibri',
                backgroundColor: "white",
                fontWeight: 'bold',
                textDecorationLine: 'underline',
                fontSize: '2rem',
                display: 'inline-block',
                alignContent: 'center',
                color: '#30cddc',
                textTransform: 'none',
                bottom: '0.5rem',
                '&:hover': {
                    backgroundColor: 'white',}
            }}
            onClick={CLButtonClick}>
            Click here
        </Button>
        <default class = "textAdj2">
            to browse through our most trending searches...
        </default></></>
        </div>
    );
}

export default CLButton;
