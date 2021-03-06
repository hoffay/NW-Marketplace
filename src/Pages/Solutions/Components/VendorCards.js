import React from 'react';
import { Card, CardContent, Typography, CardActions, CardMedia/*, CardHeader,Grid,Button*/ } from '@mui/material'
import VendorModal from './VendorModal';

/*function createCard(vendor) {
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
}*/

function breakLines(sol) {
    if(!sol)
    {
        return;
    }

    if(sol.length <= 26)
    {
        return (
            <Typography variant="h6" fontWeight="bold" marginLeft="16px">
            {sol} 
            <br />
            <br></br>  
            </Typography>
            
        )
    }
    else{
        return (
            <Typography variant="h6" fontWeight="bold" marginLeft="16px">{sol}</Typography>
        )
    }
}


function VendorCard({ vendor, solName }) {
    

    return (
<div className='vendorCard'>
            <Card key={vendor['vendor_name']} variant="outlined" sx={{ width: 300, height: 350, borderRadius: '20px' }}>
                <div style={{ display: "inline-grid", justifyContent: "center", alignItems: "center", height: 90, justifyItems: "left", marginLeft:16 }}>
                    <CardMedia
                        component="img" 
                        image={process.env.PUBLIC_URL + `/VendorImages/${vendor['Logo'] ? vendor['Logo'] : vendor['vendor_name'].replace(/\s/g, '').toLowerCase()}.png`}
                        height="auto"
                        sx={{ width: "auto" }}
                    />
                    
                </div>
                {breakLines(solName)}
                <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
                    <div style={{ maxHeight: "100px", paddingBottom: 10}}>
                        <Typography align="left">
                            <div style={{fontWeight:"bold", display:"inline"}}>Company: </div>
                            {vendor['vendor_name']}
                        </Typography>
                    </div>
                    <div style={{ overflow: "hidden", textOverflow: "ellipsis", height: "100px", display: '-webkit-box', WebkitBoxOrient: 'vertical',WebkitLineClamp: 4}}>
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
