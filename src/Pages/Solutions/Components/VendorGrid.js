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
import {useLocation} from 'react-router-dom';

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


function sortCards(){
  let industry1=""
  if(window.location.hash==="#food") {
industry1="Food Service";
} else if(window.location.hash==="#retail"){
   industry1="Retail";  
} else if(window.location.hash==="#hotelmotel"){
   industry1="Hotel/Motel";  
} else if(window.location.hash==="#farmagribusiness"){
   industry1="Farm/Agribusiness";  
} else if(window.location.hash==="#habitual"){
   industry1="Habitational";  
} else if(window.location.hash==="#processservice"){
   industry1="Process/Service";  
} else if(window.location.hash==="#manufacturing"){
   industry1="Manufacturing";  
} else if(window.location.hash==="#autoService"){
   industry1="Auto Service";  
} else if(window.location.hash==="#wholesale"){
   industry1="Wholesale";  
} else if(window.location.hash==="#construction"){
   industry1="Construction";  
} else if(window.location.hash==="#officeprofessional"){
   industry1="Office/Professional";  
} else if(window.location.hash==="#healthcare"){
   industry1="Health Care"; 
}

const updateVendor = (industry1 != "") ? vendors.filter(solution => solution['Industry'].includes(industry1)) : vendors;
return updateVendor;
}
function VendorGrid() {

  const location = useLocation();

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
    if(location.state !== null)
    {
      setData(location.state.data)
    }
    else{
      let newData = sortCards(vendors);
      console.log(newData);
      setData(newData);
    }
    
  }


  const handleSort = (sortChoice) => {
    let value = sortChoice;

  }

  const ascending = () => {
    const newvendor_list = [...data].sort((a, b) => {
      if (a.Company < b.Company) return -1;
      if (a.Company === b.Company) return 0;
      return 1;
    });
    setData(newvendor_list);
    console.log(data);
    console.log('NEWVENDORLIST: ' + Array.isArray(newvendor_list))
    console.log('data: ' + Array.isArray(data))
  }

  const descending = () => {
    const newvendor_list = [...data].sort((a, b) => {
      if (b.Company < a.Company) return -1;
      if (b.Company === a.Company) return 0;
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

  let vendorDisplay = data.map(solution => (
    <Grid item key={solution.id} >
      <VendorCard vendor={solution} />
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
