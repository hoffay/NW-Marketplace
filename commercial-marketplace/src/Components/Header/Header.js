import React from "react";
import styles from './styles.css';
import { Button, AppBar, Toolbar } from '@mui/material'

// const theme = {
//     blue: {
//         default: "#4287f5",
//         hover: "#1971ff"  
//     }
// };

function LCSRedirect(ButtonLCS1) {
    window.open("https://www.mylosscontrolservices.com/");
}

function LCSButton1 () {
    return (
        <header>
            <AppBar>
                <Button style={styles.ButtonLCS1} onClick={LCSRedirect}>
                    <label>My Loss Control Services</label>
                </Button>
            </AppBar>
        </header>
            
    );
}

export default LCSButton1;