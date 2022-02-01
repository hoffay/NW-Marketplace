import React from "react";
import LCSButton1 from "./LCSButton";
import { Button, AppBar, Toolbar } from '@mui/material'


function Header() {
    return (
        <header>
            <AppBar position="static">
                <Toolbar sx={{ marginLeft: "auto" }}>
                    <LCSButton1 />
                </Toolbar>
            </AppBar>
        </header>

    );
}

export default Header;