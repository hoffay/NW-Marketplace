import React from "react";
import styles from './styles.css';
import { Button, withStyles } from '@mui/material'
import { fontStyle, style } from "@mui/system";

function LCSRedirect(ButtonLCS1) {
    window.open("https://www.mylosscontrolservices.com/");
}


function LCSButton2() {
    return (
            <Button 
            sx={{
                color: 'white',
                fontFamily: 'Georgia, Times New Roman, Times, serif',
                fontSize: 16,
                border: '2px solid 30cddc',
                borderRadius: '50px',
                backgroundColor: "#30cddc",
                fontWeight: '850',
                width: '280px',
                height: '50px',
                zIndex: '1',
                marginLeft: '100px',
                marginRight: '150px',
                paddingLeft: '40px',
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: '#d0d3d4',}
                }}
                onClick={LCSRedirect}>
            
            Go to Website
            </Button>
    );
}


export default LCSButton2;
