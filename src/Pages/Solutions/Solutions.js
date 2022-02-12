import Searchbar from "../../Components/Searchbar/Searchbar";
import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';
import { vendors } from "../../VendorData";
import VendorCard from "./Components/VendorCards";

// const [vendors, setVendors] = useState([])

// useEffect(() => {
//     fetch('http://localhost:3000/vendorData')
// })

function Solutions() {
    return (
        <body>
        <Grid container sx={{ flexGrow: 1, overflow: "auto" }} wrap="nowrap" minWidth="fit-content" rowSpacing={1} justifyContent="center">
                {vendors.map(vendor => (
                    <Grid item key={vendor.Vendor_Name} xs={2} md={2} lg={2}>
                        <VendorCard vendor={vendor} />
                    </Grid>
                ))}
        </Grid>
        </body>
    );
}

export default Solutions;