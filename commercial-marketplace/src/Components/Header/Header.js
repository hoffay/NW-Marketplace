import React from "react";
import './styles.css';

const theme = {
    blue: {
        default: "#4287f5",
        hover: "#1971ff"  
    }
};

function LCSRedirect(ButtonLCS1) {
    window.open("https://www.mylosscontrolservices.com/");
}

function LCSButton1 () {
    return (
        <header>
            <button className="buttonLCS1" onClick={LCSRedirect}>
                <label>My Loss Control Services</label>
            </button>
        </header>
            
    );
}

export default LCSButton1;