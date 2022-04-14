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
import Searchbar from '../../../Components/Searchbar/Searchbar';

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

let industry1=""
function sortCards(){
  
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
} else if(window.location.hash==="#search"){
  industry1="Search";
}
console.log(industry1)

const updateVendor = (industry1 != "") ? vendors.filter(vendor => vendor['Industry'].includes(industry1)) : vendors;
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
      setData(location.state.data);
      location.state = null;
    }
    else{
      let newData = sortCards(vendors);
      setData(newData);
    }
    
  }

  let isSearch = window.location.hash==="#search" ? true : false;

  const ascending = () => {
    const newvendor_list = [...data].sort((a, b) => {
      if (a["vendor_name"] < b["vendor_name"]) return -1;
      if (a["vendor_name"] === b["vendor_name"]) return 0;
      return 1;
    });
    setData(newvendor_list);
    console.log(data);
    console.log('NEWVENDORLIST: ' + Array.isArray(newvendor_list))
    console.log('data: ' + Array.isArray(data))
  }

  const descending = () => {
    const newvendor_list = [...data].sort((a, b) => {
      if (b["vendor_name"] < a["vendor_name"]) return -1;
      if (b["vendor_name"] === a["vendor_name"]) return 0;
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

  function getVendors(vendor)
  {
    return vendor['vendor_name'].str.split(/\r?\n/);
  }

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

  function exSol() {
    const cardList = []
    data.map(vendor => {
      //console.log(vendor['Products'].split(/\r?\n/))
      let solutions = vendor['product'] ? vendor['product'].split(/\r?\n/) : ""
      //console.log(solutions)
      for(let i = 0; i < solutions.length; i++)
      {
        //console.log(solutions[i])
        cardList.push(<Grid item key={vendor['vendor_name']} >
          <VendorCard solution={solutions[i]} />
        </Grid>)
      }
      for(let i = 0; i < cardList.length; i++)
      {
        console.log(cardList[i])
      }
      return cardList
    })
  }

  // let solutionDisplay = [...data].map(vendor => {
  //   vendor['product'].split(/\r?\n/).map(sol => {
  //       <Grid item key={sol} >
  //         <VendorCard vendor={vendor} solname={sol} />
  //       </Grid>
  //   })
  // })
  
  let vendorDisplay = data.map(vendor => (
    <Grid item key={vendor['vendor_name']} >
      <VendorCard vendor={vendor} solName={industry1 === "" && isSearch === false ? "" : vendor['product'].split(/\r?\n/)[0]}/>
    </Grid>
  ))

  let solDisplay = data.map(vendor => (
    <Grid item key={vendor['vendor_name']} >
      <VendorCard vendor={vendor} solName={vendor['product'] ? vendor['product'].split(/\r?\n/)[0] : ""}/>
    </Grid>
  ))

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
              sx={{
              textTransform: 'none',
              fontFamily: 'Calibri',
              fontWeight: 'bold',
              fontSize: '1.4rem',
              backgroundColor: '#fff',
              color: '#30cddc',
              border: '2px solid #30cddc',    
              }}
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
          <Button variant="outlined" size="medium" sx={{ border: "2px solid", color: "#30cddc" }} onClick={() => slide(-200)}>
            <ArrowBackIosIcon />
          </Button>
        )}
        {!scrolEnd && (
          <Button variant="outlined" size="medium" sx={{ border: "2px solid", color: "#30cddc" }} onClick={() => slide(+200)}>
            <ArrowForwardIosIcon />
          </Button>
        )}
      </div>
      <div className="fullVendorView" sx={{ display: "flex", wrap: "wrap", justifyContent: "center", overflowX: "hidden" }} >
        <Grid ref={scrl} onScroll={scrollCheck} id="vendorGrid" container columnSpacing={{ xs: 1, sm: 2, md: 3 }} wrap="nowrap" sx={{ overflowX: "hidden" }}>
          {industry1 == "" || isSearch == true ? vendorDisplay : solDisplay}
        </Grid>
      </div>
    </div>

  );
}

export default VendorGrid;
