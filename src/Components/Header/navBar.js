import React from "react";
import styles from './styles.css';
import LCSButton1 from "./LCSButton";
import { Button, withStyles } from '@mui/material'
function NavBar() {
return (
<nav class="navBar">
   <a href="" ><img src="https://1000logos.net/wp-content/uploads/2018/08/Nationwide-Logo.png" alt="Logo" width="100" height="56"></img> </a>
   <a href="">Home </a>
   <a href="" class="navPad">Solutions Catalog </a>
   <div class="navPad">
   <LCSButton1/>
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
                    marginTop: '15px',
                    zIndex: '1',
                    position: 'relative',
                    marginLeft: '200px',
                    '&:hover': {
                        backgroundColor: '#d0d3d4',}
                }}
                >
                Go to Website
            </Button>
   </div>
   <div class="dropdown">
      <span id="navDropImg"><img src="https://img.icons8.com/material-outlined/24/000000/drag-list-down.png"></img></span>
      <div class="dropdown-content">
         <tr>
         <tr><a href="">Log In</a></tr>
         <tr><a href="">How It Works</a></tr>
         <tr><a href="">My Loss Control</a></tr>
         <tr><a href="">About Us</a></tr>
         <tr><a href="">Settings</a></tr>
         <tr><a href="">Help</a></tr>
         </tr>
      </div>
   </div>
</nav>
)
}
export default NavBar;