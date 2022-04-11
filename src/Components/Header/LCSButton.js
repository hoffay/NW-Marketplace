import React from "react";
import { Button } from '@mui/material'

function LCSRedirect(ButtonLCS1) {
    window.open("https://www.mylosscontrolservices.com/");
}

function LCSButton1() {
    return (
            <Button 
                sx={{
                    color: 'black',
                    fontFamily: 'Georgia, Times New Roman, Times, serif',
                    fontSize: '1vw',
                    border: '2px solid white',
                    borderRadius: '4vw',
                    backgroundColor: "white",
                    fontWeight: '850',
                    width: '18vw',
                    height: '3.3vw',
                    marginRight: '30vw',
                    zIndex: '2',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: 'white',}
                    
                }}
                onClick={LCSRedirect}>
                Loss Control Services
            </Button>
            
    );
}


export default LCSButton1;
