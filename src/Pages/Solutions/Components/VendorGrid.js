import React, { useState, useRef, useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import { vendors } from "../../../VendorData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VendorCard from "./VendorCards";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));


function VendorGrid() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling
  const [data, setData] = useState([]);
  const [sortValue, setSortValue] = useState([]);

  useEffect(() => {
    loadUsersData();
  }, []);

  const loadUsersData = async () => {
    setData(vendors);
  }


  const handleSort = (sortChoice) => {
    let value = sortChoice;

  }

  const ascending = () => {
    const newvendor_list = [...data].sort((a, b) => {
      if (a.Vendor_Name < b.Vendor_Name) return -1;
      if (a.Vendor_Name === b.Vendor_Name) return 0;
      return 1;
    });
    setData(newvendor_list);
    console.log(data);
    console.log('NEWVENDORLIST: ' + Array.isArray(newvendor_list))
    console.log('data: ' + Array.isArray(data))
  }

  const descending = () => {
    const newvendor_list = [...data].sort((a, b) => {
      if (b.Vendor_Name < a.Vendor_Name) return -1;
      if (b.Vendor_Name === a.Vendor_Name) return 0;
      return 1;
    });
    setData(newvendor_list);


  }

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };


  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  let vendorDisplay = data.map(vendor => (
    <Grid item key={vendor.Vendor_Name} >
      <VendorCard vendor={vendor} />
    </Grid>
  ));

  return (
    <div className="VendorWrap">

      <div className="scrollButtons">
        <div className="sortButton">
          <div>
            <Button
              id='demo-customized-button'
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Sort by
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClick={handleClose}
              onClose={handleClose}
            >
              <MenuItem onClick={ascending}  >
                <ArrowForwardIcon />
                A-Z
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem onClick={descending} >
                <ArrowBackIcon />
                Z-A
              </MenuItem>
            </StyledMenu>
          </div>
        </div>
        {scrollX !== 0 && (
          <Button variant="outlined" size="medium" sx={{ border: "2px solid", color: "#1f74db" }} onClick={() => slide(-200)}>
            <ArrowBackIosIcon />
          </Button>
        )}
        {!scrolEnd && (
          <Button variant="outlined" size="medium" sx={{ border: "2px solid", color: "#1f74db" }} onClick={() => slide(+200)}>
            <ArrowForwardIosIcon />
          </Button>
        )}
      </div>
      <div className="fullVendorView" sx={{ display: "flex", wrap: "wrap", justifyContent: "center", overflowX: "hidden" }} >
        <Grid ref={scrl} onScroll={scrollCheck} id="vendorGrid" container columnSpacing={{ xs: 1, sm: 2, md: 3 }} wrap="nowrap" sx={{ overflowX: "hidden" }}>
          {vendorDisplay}
        </Grid>
      </div>
    </div>

  );
}

export default VendorGrid;
