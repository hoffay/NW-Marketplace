import React from 'react';
import { Button, TextField } from '@mui/material';
import '../App.css';

function CLButtonClick(CLButton) {
}

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
                fontSize: '32px',
                display: 'inline-block',
                alignContent: 'center',
                color: '#30cddc',
                textTransform: 'none',
                bottom: '6px',
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
