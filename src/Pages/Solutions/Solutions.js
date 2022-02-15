import Searchbar from "../../Components/Searchbar/Searchbar";
import React, { useEffect, useState, useRef } from 'react';
import { Grid, Card, CardContent, Typography, CardHeader, Button } from '@mui/material';
import { vendors } from "../../VendorData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VendorCard from "./Components/VendorCards";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Solutions.css';

// const [vendors, setVendors] = useState([])

// useEffect(() => {
//     fetch('http://localhost:3000/vendorData')
// })

// const scroll = (scrollOffset) => {
//     ref.current.scrollLeft += scrollOffset;
// };

//grid container sx={{ flexGrow: 1, overflowX: "scroll" }}  rowSpacing={1} justifyContent="center"


function Solutions() {
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
        <div className="wrap">
        <div className="fullVendorView" sx={{ display: "flex", wrap: "wrap", justifyContent: "center", overflowX: "hidden",  }} >
            <Grid ref={scrl} onScroll={scrollCheck} id="vendorGrid" container wrap="nowrap" sx={{ overflowX: "scroll" }}>
                {vendors.map(vendor => (
                    <Grid item key={vendor.Vendor_Name} xs={2} md={2} lg={2}>
                        <VendorCard vendor={vendor} />
                    </Grid>
                ))}
            </Grid>
        </div>
        {scrollX !== 0 && (
            <ArrowBackIosIcon onClick={() => slide(-200)} sx={{ backgroundColor: "blue" }} />
        )}
        {!scrolEnd && (
            <ArrowForwardIosIcon variant="outlined" onClick={() => slide(+200)} />
        )}
        </div>
    );
}

export default Solutions;