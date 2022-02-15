import Searchbar from "../../Components/Searchbar/Searchbar";
import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, CardHeader, Button } from '@mui/material';
import { vendors } from "../../VendorData";
import VendorCard from "./Components/VendorCards";

// const [vendors, setVendors] = useState([])

// useEffect(() => {
//     fetch('http://localhost:3000/vendorData')
// })

// const scroll = (scrollOffset) => {
//     ref.current.scrollLeft += scrollOffset;
// };

//grid container sx={{ flexGrow: 1, overflowX: "scroll" }}  rowSpacing={1} justifyContent="center"

function Solutions() {
    return (
        <div sx={{ display: "flex", wrap: "wrap", justifyContent: "space-around", overflowX: "hidden" }}>
            <Grid className="vendorGrid" container wrap="nowrap" sx={{ overflowX: "scroll" }}>
                {vendors.map(vendor => (
                    <Grid item key={vendor.Vendor_Name} xs={2} md={2} lg={2}>
                        <VendorCard vendor={vendor} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Solutions;