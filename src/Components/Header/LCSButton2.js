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
                fontSize: '1vw',
                border: '2px solid 30cddc',
                borderRadius: '4vw',
                backgroundColor: "#30cddc",
                fontWeight: '850',
                width: '18vw',
                height: '3.3vw',
                zIndex: '1',
                marginRight: '2vw',
                paddingLeft: '3vw',
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: '#d0d3d4',}
                }}
                onClick={LCSRedirect}>
            
            Go to website
            </Button>
    );
}


export default LCSButton2;
