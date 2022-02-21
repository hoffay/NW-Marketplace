import React, { useState, useRef } from 'react';
import { Grid, IconButton } from '@mui/material';
import { vendors } from "../../../VendorData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VendorCard from "./VendorCards";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


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
      {scrollX !== 0 && (
        <IconButton onClick={() => slide(-200)}>
          <ArrowBackIosIcon />
        </IconButton>
      )}
      {!scrolEnd && (
        <IconButton onClick={() => slide(+200)}>
          <ArrowForwardIosIcon />
        </IconButton>
      )}
      </div>
      <div className="fullVendorView" sx={{ display: "flex", wrap: "wrap", justifyContent: "center", overflowX: "hidden" }} >
        <Grid ref={scrl} onScroll={scrollCheck} id="vendorGrid" container columnSpacing={{ xs: 1, sm: 2, md: 3 }} wrap="nowrap" sx={{ overflowX: "hidden" }}>
          {vendors.map(vendor => (
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