import React from 'react';
import { Button, TextField } from '@mui/material';

function CLButtonClick(CLButton) {}

function CLButton() {
    return (
        <><div>
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
                '&:hover': {
                    backgroundColor: 'white',}
            }}
            onClick={CLButtonClick}>
            Click here
        </Button>
        <default>
            to browse through our most trending searches...
        </default></></>
    );
}

export default CLButton;