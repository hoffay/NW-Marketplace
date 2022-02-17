import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DehazeIcon from '@mui/icons-material/Dehaze';
import LCSButton1 from "./LCSButton";
import LCSButton2 from "./LCSButton2";


const pages = ['Home', 'Solutions Catelog'];
const settings = ['Log in', 'How It Works', 'My Loss Control', 'About Us', 'Settings', 'Help'];


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function solutionsClick(yep) {
    window.location.replace("/solutions");
}
function homeClick(yep) {
  window.location.replace("/");
}

  return (
    <AppBar position="static">
      <Container maxWidth="x3">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 15, display: { xs: 'none', md: 'flex' } }}
          >
            <img src="nwlogo.png" height="100px" alt="Logo" ></img>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"

            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                            

              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={homeClick}
                sx={{ mr: 8, fontSize: 22, ml: 10 ,my: 2, color: 'white', display: 'block'}}
              >
                Home
              </Button>
              <Button
                onClick={solutionsClick}
                sx={{ my: 2, fontSize: 22, color: 'white', display: 'block'}}
              >
                Solutions<br></br>Catalog
              </Button>
          </Box>
          <div class="layered">
    <LCSButton1/>
    <LCSButton2/>
</div>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <div class="moveright">
              <DehazeIcon
              style={{ 
                color: "#30cddc",
                width: 50,
                height: 50,
            }}
              ></DehazeIcon>
              </div>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '2 5px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} 
                onClick={handleCloseUserMenu}
                sx={{
                  fontsize: 35,
                  color: '#207acc',
                  borderBottom: 1,
                  borderColor: '#CCD7E4',
                  bgcolor: 'white'
                
                }}
                >
                 
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
