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
                    border: '2px solid white',
                    borderRadius: '50px',
                    backgroundColor: "white",
                    fontWeight: 'bold',
                    width: '250px',
                    height: '40px',
                    marginTop: '15px',
                    position: 'absolute',
                    marginRight: '50px',
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
