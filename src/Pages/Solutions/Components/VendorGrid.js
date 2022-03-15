import React, { useState, useRef } from 'react';
import { Grid, Button } from '@mui/material';
import { vendors } from "../../../VendorData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VendorCard from "./VendorCards";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SortByButton from './sortbyButton';

function sortCards(){
  let industry1="empty"
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

const updateVendor = vendors.filter(vendor => vendor['Industry'].includes(industry1));
return updateVendor;
}
function VendorGrid() {

  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling

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
  return (
    <div className="VendorWrap">
      <div className="scrollButtons">
        <div className="sortButton">
        <SortByButton/>
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
          {
          sortCards().map(vendor => (
            <Grid item key={vendor.Vendor_Name} xs={2} md={2} lg={2}>
              <VendorCard vendor={vendor} />
            </Grid>
          ))}
        </Grid>
      </div>
      </div>
    
    );
}

export default VendorGrid;