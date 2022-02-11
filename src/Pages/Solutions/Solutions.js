import Searchbar from "../../Components/Searchbar/Searchbar";
import React from 'react';
import { Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';
import { vendors } from "../../VendorData";
import VendorCard from "./Components/VendorCards";

function Solutions() {
    return (
        <Grid container>
            <VendorCard />
        </Grid>

    );
}

export default Solutions;