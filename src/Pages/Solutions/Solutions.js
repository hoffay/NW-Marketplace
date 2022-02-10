import Searchbar from "../../Components/Searchbar/Searchbar";
import React from 'react';
import { Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';
import { vendors } from "../../VendorData";
import VendorCard from "./Components/VendorCards";

function Solutions() {
    return (
        <Grid
        container
        spacing={5}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
          <VendorCard />
       </Grid>

    );
}

export default Solutions;