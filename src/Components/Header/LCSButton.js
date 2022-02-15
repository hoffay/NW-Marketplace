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
                    fontSize: '18px',
                    border: '2px solid white',
                    borderRadius: '50px',
                    backgroundColor: "white",
                    fontWeight: 'bold',
                    width: '235px',
                    height: '40px',
                    marginTop: '15px',
                    position: 'absolute',
                    marginRight: '50px',
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
