import Searchbar from "../../Components/Searchbar/Searchbar";
import React from 'react';
import { Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';
import { vendors } from "../../VendorData";
import VendorCard from "./Components/VendorCards";

function Solutions() {
    return (
        <Grid container>
            <Grid items xs={6}>
                <VendorCard />
            </Grid>
        </Grid>

    );
}

export default Solutions;