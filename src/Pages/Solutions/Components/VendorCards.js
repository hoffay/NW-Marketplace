import React from 'react';
import { vendors } from '../../../VendorData';
import { Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';


function createCard(vendor) {
    console.log(vendor.Vendor_Name);
    return(
        <Card key="{vendor}" sx={{ minWidth: 275 }}>
             <CardHeader 
                title={vendor.Vendor_Name}
             />
             <CardContent>
                 <Typography>
                     {vendor.Description}
                 </Typography>
             </CardContent>
        </Card>
      );
}

function VendorCard(){

    return(
        <div className="card-deck text-center"> 
          
                        {vendors.map(createCard)} 
       
        </div>
    );
}

export default VendorCard;