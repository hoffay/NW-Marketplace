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
    border: '2px solid',
    boxShadow: 24,
    p: 4,
    borderColor: '#1f74db',
    height: "45rem",
};


export default function VendorModal({ vendor }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
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
                            src={process.env.PUBLIC_URL + `/VendorImages/actuate.png`}
                        />
                    </div>
                    <div style={{ display: "flex", backgroundColor: "#1f74db", alignItems: "center", height: "4rem", marginLeft: "-32px", marginRight: "-32px" }}>
                        <Typography id="modal-modal-discount" color="white" sx={{ marginLeft: "32px" }}>
                            Nationwide customers get a 2% bonus on blank
                        </Typography>
                    </div>
                    <Typography id="modal-modal-title" variant="h4" sx={{ mt: 2 }}>
                        Vendor Name Here
                    </Typography>
                    <div style={{ display: "inline-flex", mt: 2, marginBottom: "1rem", marginTop: "1rem" }}>
                        <Typography fontWeight="bold" sx={{ mr: 1 }}>
                            Company Name:
                        </Typography>
                        <Typography>
                            Vendor name here
                        </Typography>
                    </div>
                    <div style={{ display: "inline-flex", mt: 2 }}>
                        <Typography fontWeight="bold" sx={{ mr: 1 }}>
                            Info:
                        </Typography>
                        <Typography>
                            Here is some vendor info. it is quite extensive and will take up many lines. hopefully this will show on all the lines. lorem ipsum latin i dont know the rest.
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
                            I really loved this product! Helped me a lot
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
                        <div style={{ flexDirection: "column", marginLeft: 32, marginTop: 20, color: "white" }}>
                            <div>
                            <Typography>
                                Owner Name
                            </Typography>
                            </div>
                            <div>
                            <Typography>
                                Phone Number
                            </Typography>
                            </div>
                            <div>
                            <Typography>
                                Email
                            </Typography>
                            </div>
                        </div>
                        <div style={{ marginTop: 20, color: "white" }}>
                            <Typography>
                                Social Media
                            </Typography>
                        </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                            <Button variant="contained" sx={{ 
                                color: "white", 
                                backgroundColor: "#30cddc", 
                                width: "18rem", 
                                height: "3rem" 
                                }}>
                            Go to Site
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}