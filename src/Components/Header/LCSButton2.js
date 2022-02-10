import React from "react";
import styles from './styles.css';
import { Button, withStyles } from '@mui/material'
import { fontStyle, style } from "@mui/system";




function LCSButton2() {
    return (
            <Button 
            sx={{
                color: 'white',
                fontFamily: 'Georgia, Times New Roman, Times, serif',
                border: '2px solid 30cddc',
                borderRadius: '50px',
                backgroundColor: "#30cddc",
                fontWeight: 'bold',
                width: '250px',
                height: '40px',
               
                zIndex: '1',
                
                marginLeft: '100px',
                marginRight: '200px',
                '&:hover': {
                    backgroundColor: '#d0d3d4',}
            }}
            >
            Go to Website
            </Button>
            
    );
}


export default LCSButton2;
