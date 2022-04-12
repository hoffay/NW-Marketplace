import React from 'react';
import { vendors } from '../../../VendorData';
import { Grid, Card, CardContent, Typography, CardHeader, CardActions, Button, CardMedia } from '@mui/material'
import VendorModal from './VendorModal';
import { fontWeight } from '@mui/system';
import { solutions } from '../../../SolutionsData';



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

function VendorCard({ vendor, solName }) {
    return (
<div className='vendorCard'>
            <Card key={vendor['vendor_name']} variant="outlined" sx={{ width: 300, height: 350, borderRadius: '20px' }}>
                <div style={{ display: "inline-grid", justifyContent: "center", alignItems: "center", height: 100, justifyItems: "left", marginLeft:16 }}>
                    <CardMedia
                        component="img" 
                        image={process.env.PUBLIC_URL + `/VendorImages/${vendor['Logo'] ? vendor['Logo'] : vendor['vendor_name'].replace(/\s/g, '').toLowerCase()}.png`}
                        height="auto"
                        sx={{ width: "auto" }}
                    />
                    <Typography variant="h6" fontWeight="bold">{solName}</Typography>
                </div>
                <CardContent>
                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", maxHeight: "100px"}}>
                        <Typography align="left">
                            <div style={{fontWeight:"bold", display:"inline"}}>Company: </div>
                            {vendor['vendor_name']}
                        </Typography>
                    </div>
                    <br />
                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", maxHeight: "100px" }}>
                        <Typography align="left">
                            <div style={{fontWeight:"bold",display:"inline"}}>Info: </div>
                            {vendor['description']}
                        </Typography>
                    </div>

                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                <VendorModal vendor={vendor} solName={solName}/>
                </CardActions>
            </Card>

        </div>
    )

}

export default VendorCard;
