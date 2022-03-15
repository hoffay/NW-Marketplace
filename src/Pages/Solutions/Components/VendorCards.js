import React from 'react';
import { vendors } from '../../../VendorData';
import { Grid, Card, CardContent, Typography, CardHeader, CardActions, Button, CardMedia } from '@mui/material'


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
    //TODO Will refactor later
    let industry1="empty"
    if(window.location.hash==="#food") {
 industry1="Food Service";
} else if(window.location.hash==="#retail"){
     industry1="Retail";  
} else if(window.location.hash==="#hotelmotel"){
     industry1="Hotel/Motel";  
} else if(window.location.hash==="#farmagribusiness"){
     industry1="Farm/Agribusiness";  
} else if(window.location.hash==="#habitual"){
     industry1="Habitational";  
} else if(window.location.hash==="#processservice"){
     industry1="Process/Service";  
} else if(window.location.hash==="#manufacturing"){
     industry1="Manufacturing";  
} else if(window.location.hash==="#autoService"){
     industry1="Auto Service";  
} else if(window.location.hash==="#wholesale"){
     industry1="Wholesale";  
} else if(window.location.hash==="#construction"){
     industry1="Construction";  
} else if(window.location.hash==="#officeprofessional"){
     industry1="Office/Professional";  
} else if(window.location.hash==="#healthcare"){
     industry1="Health Care"; 
}

let updateVendor = vendors.filter(vendor => vendor['Industry'].includes(industry1));
console.log(updateVendor)
vendor=updateVendor[0]//If the number is removed all the vendors will be blank but the vendor shown in correct

if(industry1!=="empty"){
return (
        <div className="vendorCard">
            <Card key={vendor.Vendor_Name} variant="outlined" sx={{ minWidth: 275, height: 300 }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 100 }}>
                    <CardMedia
                        component="img" 
                        image={process.env.PUBLIC_URL + `/VendorImages/${vendor.Logo}.png`}
                        height="auto"
                        sx={{ width: "auto" }}
                    />
                </div>
                <CardContent>
                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", maxHeight: "100px" }}>
                        <Typography>
                            {vendor.Description}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="medium" variant="contained" sx={{ width: 200 }} onClick={() => window.open(vendor.Web_Link)}>
                        Go to Site
                    </Button>
                </CardActions>
            </Card>

        </div>
    )
    } else {
        return (
            <div className="vendorCard">
    
                <Card key={vendor.Vendor_Name} variant="outlined" sx={{ minWidth: 275, height: 300 }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: 100 }}>
                        <CardMedia
                            component="img" 
                            image={process.env.PUBLIC_URL + `/VendorImages/${vendor.Logo}.png`}
                            height="auto"
                            sx={{ width: "auto" }}
                        />
                    </div>
                    <CardContent>
                        <div style={{ overflow: "hidden", textOverflow: "ellipsis", maxHeight: "100px" }}>
                            <Typography>
                                {vendor.Description}
                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center" }}>
                        <Button size="medium" variant="contained" sx={{ width: 200 }} onClick={() => window.open(vendor.Web_Link)}>
                            Go to Site
                        </Button>
                    </CardActions>
                </Card>
    
            </div>
        )   
    }
}

export default VendorCard;