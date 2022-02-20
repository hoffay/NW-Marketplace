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

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
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
        sx={{ padding: '4px 0'}}
      >
             
        <MenuItem >All</MenuItem>
        <MenuItem onClick={handleClose}>Food Services</MenuItem>
        <MenuItem onClick={handleClose}>Retail</MenuItem>
        <MenuItem onClick={handleClose}>Hotel/Motel</MenuItem>
        <MenuItem onClick={handleClose}>Farm/Agribusines</MenuItem>
        <MenuItem onClick={handleClose}>Habitual</MenuItem>
        <MenuItem onClick={handleClose}>Proecess/Service</MenuItem>
        <MenuItem onClick={handleClose}>Manufacturing</MenuItem>
        <MenuItem onClick={handleClose}>Auto Service</MenuItem>
        <MenuItem onClick={handleClose}>Wholesale</MenuItem>
        <MenuItem onClick={handleClose}>Contracting</MenuItem>
        <MenuItem onClick={handleClose}>Office/Professional</MenuItem>
        <MenuItem onClick={handleClose}>Health Care</MenuItem>
      </Menu>
    </div>
  );
}

