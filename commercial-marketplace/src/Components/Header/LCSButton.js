import React from "react";
import styles from './styles.css';
import { Button, withStyles } from '@mui/material'
//import { withStyles } from '@mui/styles';
// const styles = theme => ({
//     blue: {
//         default: "#4287f5",
//         hover: "#1971ff"  
//     }
// });

function LCSRedirect(ButtonLCS1) {
    window.open("https://www.mylosscontrolservices.com/");
}

function LCSButton1() {
    return (
            <Button 
                sx={{
                    color: 'white',
                    fontFamily: 'Georgia, Times New Roman, Times, serif'
                }}
                onClick={LCSRedirect}>
                My Loss Control Services
            </Button>
    );
}

export default LCSButton1;