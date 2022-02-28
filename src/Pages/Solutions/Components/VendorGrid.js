import React, { useState, useRef, useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import { vendors } from "../../../VendorData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VendorCard from "./VendorCards";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SortByButton from './sortbyButton';


function VendorGrid() {

  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling
  const [data, setData] = useState([]);
  const [sortValue, setSortValue] = useState([]);

  useEffect(() => {
    loadUsersData();
  },[]);

  const loadUsersData = async () => {
    setData(vendors);
  }


  const handleSort = (sortChoice) => {
    let value = sortChoice;

  }

  const vendorOnClick = () => {
    const newvendor_list = [...data].sort((a,b) => {
        if (a.Vendor_Name < b.Vendor_Name) return -1;
        if (a.Vendor_Name === b.Vendor_Name) return 0;
        return 1;
    });
    setData(newvendor_list);
    console.log(data);
    console.log('NEWVENDORLIST: ' + Array.isArray(newvendor_list))
    console.log('data: ' + Array.isArray(data))
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
    <Grid item key={vendor.Vendor_Name} xs={2} md={2} lg={2}>
      <VendorCard vendor={vendor} />
    </Grid>
  ));

  return (
    <div className="VendorWrap">
        
      <div className="scrollButtons">
        <div className="sortButton">
        <SortByButton onClick={vendorOnClick}/>
        <button onClick={vendorOnClick}>
          HELLO
        </button>
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
        <script>console.log(data)</script>
        <Grid ref={scrl} onScroll={scrollCheck} id="vendorGrid" container columnSpacing={{ xs: 1, sm: 2, md: 3 }} wrap="nowrap" sx={{ overflowX: "hidden" }}>
          {vendorDisplay}
        </Grid>
      </div>
      </div>
    
    );
}

export default VendorGrid;