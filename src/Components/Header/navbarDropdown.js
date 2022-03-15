import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
  window.location.replace("/solutions#food");
  document.location.reload()
}
function retail() {
  window.location.replace("/solutions#retail");
  document.location.reload()
}
function hotelmotel() {
  window.location.replace("/solutions#hotelmotel");
  document.location.reload()
}
function farmagribusiness() {
  window.location.replace("/solutions#farmagribusiness");
  document.location.reload()
}
function habitual() {
  window.location.replace("/solutions#habitual");
  document.location.reload()
}
function processservice() {
  window.location.replace("/solutions#processservice");
  document.location.reload()
}
function manufacturing() {
  window.location.replace("/solutions#manufacturing");
  document.location.reload()
}
function autoService() {
  window.location.replace("/solutions#autoService");
  document.location.reload()
}
function wholesale() {
  window.location.replace("/solutions#wholesale");
  document.location.reload()
}
function Construction() {
  window.location.replace("/solutions#construction");
  document.location.reload()
}
function officeprofessional() {
  window.location.replace("/solutions#officeprofessional");
  document.location.reload()
}
function healthcare() {
  window.location.replace("/solutions#healthcare");
  document.location.reload()
}

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}
        sx={{ mr: 8, fontSize: 22, ml: 5 ,my: 2, color: 'white', display: 'block',textTransform: 'none'}}
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
        <MenuItem onClick={farmagribusiness}>Farm/Agribusines</MenuItem>
        <MenuItem onClick={habitual}>Habitual</MenuItem>
        <MenuItem onClick={processservice}>Proecess/Service</MenuItem>
        <MenuItem onClick={manufacturing}>Manufacturing</MenuItem>
        <MenuItem onClick={autoService}>Auto Service</MenuItem>
        <MenuItem onClick={wholesale}>Wholesale</MenuItem>
        <MenuItem onClick={Construction}>Construction</MenuItem>
        <MenuItem onClick={officeprofessional}>Office/Professional</MenuItem>
        <MenuItem onClick={healthcare}>Health Care</MenuItem>
      </Menu>
    </div>
  );
}

