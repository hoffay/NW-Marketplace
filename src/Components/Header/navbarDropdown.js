import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation } from "react-router-dom";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
//TODO Will refactor later
function food() {
  if(window.location.hash===""){
  window.location.replace("/solutions#food").then(document.location.reload());
  }else{
    window.location.replace("/solutions#food")
 document.location.reload()
  }
}
function retail() {
  if(window.location.hash===""){
  window.location.replace("/solutions#retail").then(document.location.reload());
}else{
  window.location.replace("/solutions#retail")
document.location.reload()
}
}
function hotelmotel() {
  if(window.location.hash===""){
  window.location.replace("/solutions#hotelmotel").then(document.location.reload());
}else{
  window.location.replace("/solutions#hotelmotel")
document.location.reload()
}
}
function farmagribusiness() {
  if(window.location.hash===""){
  window.location.replace("/solutions#farmagribusiness").then(document.location.reload());
}else{
  window.location.replace("/solutions#farmagribusiness")
document.location.reload()
}
}
function habitual() {
  if(window.location.hash===""){
  window.location.replace("/solutions#habitual").then(document.location.reload());
}else{
  window.location.replace("/solutions#habitual")
document.location.reload()
}
}
function processservice() {
  if(window.location.hash===""){
  window.location.replace("/solutions#processservice").then(document.location.reload());
}else{
  window.location.replace("/solutions#processservice")
document.location.reload()
}
}
function manufacturing() {
  if(window.location.hash===""){
  window.location.replace("/solutions#manufacturing").then(document.location.reload());
}else{
  window.location.replace("/solutions#manufacturing")
document.location.reload()
}
}
function autoService() {
  if(window.location.hash===""){
  window.location.replace("/solutions#autoService").then(document.location.reload());
}else{
  window.location.replace("/solutions#autoService")
document.location.reload()
}
}
function wholesale() {
  if(window.location.hash===""){
  window.location.replace("/solutions#wholesale").then(document.location.reload());
}else{
  window.location.replace("/solutions#wholesale")
document.location.reload()
}
}
function Construction() {
  if(window.location.hash===""){
  window.location.replace("/solutions#construction").then(document.location.reload());
}else{
  window.location.replace("/solutions#construction")
document.location.reload()
}
}
function officeprofessional() {
  if(window.location.hash===""){
  window.location.replace("/solutions#officeprofessional").then(document.location.reload());
}else{
  window.location.replace("/solutions#officeprofessional")
document.location.reload()
}
}
function healthcare() {
  if(window.location.hash===""){
  window.location.replace("/solutions#healthcare").then(document.location.reload());
}else{
  window.location.replace("/solutions#healthcare")
document.location.reload()
}
}


let nonActive = {
  alignSelf: "center",
  textDecoration: "none",
  mr: 8, fontSize: 22, ml: 5 ,my: 2, color: 'white', display: 'block',textTransform: 'none'
}

const { pathname } = useLocation();

const navHandleClick = (e) => {
  const { linkDisabled } = this.state
  if(linkDisabled) e.preventDefault()
}

let activeStyle = {
  borderBottom: "6px solid #30cddc",
  alignSelf: "center",
  textDecoration: "none",
  mr: 8, fontSize: 22, ml: 5 ,my: 2, color: 'white', display: 'block',textTransform: 'none'
}





  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ mr: 8, fontSize: 22, ml: 5 ,my: 2, color: 'white', display: 'block',textTransform: 'none', borderBottom: pathname == '/solutions' ? '6px solid #30cddc' : 'none'}}
      >
        Solutions<br></br>Catalog
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
       
      >
             
        <MenuItem >All</MenuItem>
        <MenuItem onClick={food}>Food Services</MenuItem>
        <MenuItem onClick={retail}>Retail</MenuItem>
        <MenuItem onClick={hotelmotel}>Hotel/Motel</MenuItem>
        <MenuItem onClick={habitual}>Habitual</MenuItem>
        <MenuItem onClick={manufacturing}>Manufacturing</MenuItem>
        <MenuItem onClick={autoService}>Auto Service</MenuItem>
        <MenuItem onClick={wholesale}>Wholesale</MenuItem>
        <MenuItem onClick={processservice}>Proecess/Service</MenuItem>
        <MenuItem onClick={Construction}>Construction</MenuItem>
        <MenuItem onClick={officeprofessional}>Office/Professional</MenuItem>
        <MenuItem onClick={healthcare}>Health Care</MenuItem>
        <MenuItem onClick={farmagribusiness}>Farm/Agribusines</MenuItem>
      </Menu>
    </div>
  );
}

