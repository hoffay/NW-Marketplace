import React from 'react';
import { vendors } from '../../../VendorData';
import { Grid, Card, CardContent, Typography, CardHeader, CardActions, Button } from '@mui/material'

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
        <div className="vendorCard">

            <Card key={vendor.Vendor_Name} variant="outlined" sx={{ minWidth: 275, height: 300 }}>
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
                <CardActions>
                    <Button size="small" onClick={() => window.open(vendor.Web_Link)}>
                        Go to Site
                    </Button>
                </CardActions>
            </Card>

        </div>
    );
}

export default VendorCard;