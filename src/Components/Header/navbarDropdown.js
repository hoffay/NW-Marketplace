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
  function solutionsClick() {
    window.location.replace("/solutions");
}

let activeStyle = {
  borderBottom: "6px solid #30cddc",
  alignSelf: "center",
  textDecoration: "none",
  mr: 8, fontSize: 22, ml: 5 ,my: 2, color: 'white', display: 'block',textTransform: 'none'
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
        <MenuItem onClick={solutionsClick}>Food Services</MenuItem>
        <MenuItem onClick={solutionsClick}>Retail</MenuItem>
        <MenuItem onClick={solutionsClick}>Hotel/Motel</MenuItem>
        <MenuItem onClick={solutionsClick}>Farm/Agribusines</MenuItem>
        <MenuItem onClick={solutionsClick}>Habitual</MenuItem>
        <MenuItem onClick={solutionsClick}>Proecess/Service</MenuItem>
        <MenuItem onClick={solutionsClick}>Manufacturing</MenuItem>
        <MenuItem onClick={solutionsClick}>Auto Service</MenuItem>
        <MenuItem onClick={solutionsClick}>Wholesale</MenuItem>
        <MenuItem onClick={solutionsClick}>Contracting</MenuItem>
        <MenuItem onClick={solutionsClick}>Office/Professional</MenuItem>
        <MenuItem onClick={solutionsClick}>Health Care</MenuItem>
      </Menu>
    </div>
  );
}

