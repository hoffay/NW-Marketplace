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
        <Grid container>
            {vendors.map(vendor => (
                <Grid item key={vendor.Vendor_Name} xs={2} md={2} lg={2}>
                    <VendorCard vendor={vendor} />
                </Grid>
            ))}
        </Grid>

    );
}

export default Solutions;