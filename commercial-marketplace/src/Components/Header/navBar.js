import React from "react";
import styles from './styles.css';
import LCSButton1 from "./LCSButton";
function NavBar() {
return (
<nav class="navBar">
   <a href="" ><img src="https://1000logos.net/wp-content/uploads/2018/08/Nationwide-Logo.png" alt="Logo" width="89" height="50"></img> </a>
   <a href="">Home </a>
   <a href="">Solutions Catalog </a>

   <LCSButton1/>
   <div class="dropdown">
      <span id="navDropImg">><img src="https://img.icons8.com/material-outlined/24/000000/drag-list-down.png"></img></span>
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