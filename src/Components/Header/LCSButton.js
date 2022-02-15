import React from "react";
import styles from './styles.css';
import { Button, withStyles } from '@mui/material'
import { fontStyle, style } from "@mui/system";


function LCSRedirect(ButtonLCS1) {
    window.open("https://www.mylosscontrolservices.com/");
}

function LCSButton1() {
    return (
            <Button 
                sx={{
                    color: 'black',
                    fontFamily: 'Georgia, Times New Roman, Times, serif',
                    border: '2px solid white',
                    borderRadius: '50px',
                    backgroundColor: "white",
                    fontWeight: '850',
                    fontSize: 16,
                    width: '280px',
                    height: '50px',
                    marginRight: '500px',
                    zIndex: '2',
                    '&:hover': {
                        backgroundColor: '#d0d3d4',}
                }}
                onClick={LCSRedirect}>
                Loss Control Services
            </Button>
            
    );
}


export default LCSButton1;
