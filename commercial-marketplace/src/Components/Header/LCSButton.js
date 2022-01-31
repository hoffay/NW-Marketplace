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

function LCSButton1() {
    return (

        <Button className="buttonLCS1" onClick={LCSRedirect}>
            My Loss Control Services
        </Button>
    );
}

export default LCSButton1;