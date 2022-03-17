import React from 'react';
import { vendors } from '../../../VendorData';
import { Grid, Card, CardContent, Typography, CardHeader, CardActions, Button, CardMedia } from '@mui/material'
import VendorModal from './VendorModal';
import { fontWeight } from '@mui/system';



function createCard(vendor) {
    return (
        <div className="vendorCard">
            <Grid item xs={12} sm={6} md={4}>
                <Card key={vendor.Vendor_Name} variant="outlined">
                    <CardHeader
                        title={vendor.Vendor_Name}
                    />
                    <CardContent>
                        <div style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                            <Typography>
                                {vendor.Description}
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}

function VendorCard({ vendor }) {
    return (
<div className='vendorCard'>
            <Card key={vendor.Vendor_Name} variant="outlined" sx={{ minWidth: 275, height: 400 }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 100 }}>
                    <CardMedia
                        component="img" 
                        image={process.env.PUBLIC_URL + `/VendorImages/${vendor.Logo}.png`}
                        height="auto"
                        sx={{ width: "auto" }}
                    />
                </div>
                <CardContent>
                <div style={{ overflow: "hidden", textOverflow: "ellipsis", maxHeight: "100px"}}>
                        <Typography align="Center" fontWeight="bold" fontSize="18px">
                            {vendor.Solution}
                        </Typography>
                    </div>
                    <br></br>
                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", maxHeight: "100px"}}>
                        <Typography align="left">
                            <div style={{fontWeight:"bold", display:"inline"}}>Company: </div>
                            {vendor.Company}
                        </Typography>
                    </div>
                    <br></br>
                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", maxHeight: "100px" }}>
                        <Typography align="left">
                            <div style={{fontWeight:"bold",display:"inline"}}>Info: </div>
                            {vendor.Description}
                        </Typography>
                    </div>

                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                <VendorModal vendor={vendor}/>
                </CardActions>
            </Card>

        </div>
    )

}

export default VendorCard;
