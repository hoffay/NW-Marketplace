import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "40rem",
    bgcolor: 'background.paper',
    border: '3px solid',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
    borderColor: '#1f74db',
    height: "45rem",
    overflow: "auto"
};


export default function VendorModal({ vendor, solName }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button size="medium" variant="contained" 
                    sx=
                    {{ 
                        width: 200, 
                        textTransform: 'none', 
                        backgroundColor: "#30cddc", 
                        fontWeight: 'bold',
                        borderRadius: '8px',
                    }}  
                    onClick={handleOpen}>Details</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ height: "4rem" }}>
                        <img
                            alt="VendorImage"
                            src={process.env.PUBLIC_URL + `/VendorImages/${vendor.Logo ? vendor.Logo : vendor['vendor_name'].replace(/\s/g, '').toLowerCase()}.png`}
                        />
                    </div>
                    <div style={{ display: "flex", backgroundColor: "#1f74db", alignItems: "center", height: "4rem", marginLeft: "-32px", marginRight: "-32px" }}>
                        <Typography id="modal-modal-discount" color="white" sx={{ marginLeft: "32px" }}>
                            {vendor.Discount}
                        </Typography>
                    </div>
                    <Typography id="modal-modal-title" fontWeight="bold" variant="h4" sx={{ mt: 2 }}>
                        {solName ? solName : vendor['vendor_name']}
                    </Typography>
                    <div style={{ display: "inline-flex", mt: 2, marginBottom: "1rem", marginTop: "1rem" }}>
                        <Typography sx={{ mr: 1 }}>
                        <div style={{fontWeight:"bold", display:"inline"}}>Company name: </div>
                            {vendor['vendor_name']}
                        </Typography>
                    </div>
                    <div style={{ display: "inline-flex", mt: 2 }}>
                        <Typography fontWeight="bold" sx={{ mr: 1 }}>
                            Info:
                        </Typography>
                        <Typography>
                           {vendor['description']}
                        </Typography>
                    </div>
                    <Typography variant="h5" fontWeight="bold" sx={{ mt: "3rem" }}>
                        Example Scenarios
                    </Typography>
                    <div style={{
                        display: "flex",
                        height: "5rem",
                        border: "2px solid #000",
                        borderRadius: 25,
                        borderBottomRightRadius: 0,
                        borderColor: "#1f74db",
                        backgroundColor: "#ddddff",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "1rem",
                        marginBottom: "3rem"
                    }}>
                        <Typography>
                            {vendor['example_scenarios']}
                        </Typography>
                    </div>
                    <div className="socialsBox" style={{
                        display: "flex",
                        marginLeft: -32,
                        marginRight: -32,
                        marginBottom: -32,
                        backgroundColor: "#1f74db",
                        height: 234,
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div style={{ flexDirection: "column", marginLeft: 32, marginTop: 20, color: "white", whiteSpace: "break-spaces" }}>
                            <div style={{ marginBottom: "1rem" }}>
                            <Typography display="flex">
                                <div align="left">
                            <img src="nameIcon.svg" height="18px" alt="Logo" ></img>⠀
                            <br></br>
                            <img src="phoneIcon.svg" height="18px" alt="Logo" ></img>
                            <br></br>
                            <img src="emailIcon.svg" height="18px" alt="Logo" ></img>
                            </div>
                                {vendor['contact_info']}
                            </Typography>
                            </div>
                            
                        </div>
                        <div style={{ marginTop: 20, color: "white", marginRight: 32 }}>
                            <Typography>
                                Social Media
                            </Typography>
                            <img src="facebookIcon.svg" height="25px" alt="Logo" ></img>⠀
                            <img src="instagramIcon.svg" height="25px" alt="Logo" ></img>⠀
                            <img src="twitterIcon.svg" height="25px" alt="Logo" ></img>
                        </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                            <Button variant="contained" sx={{ 
                                color: "white", 
                                backgroundColor: "#30cddc", 
                                width: "18rem", 
                                height: "3rem",
                                textTransform: "none", 
                                fontWeight: "bold",
                                borderRadius: "10px",
                                }} onClick={() => window.open(vendor['web_link'])}>
                            Go to Site
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
