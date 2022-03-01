import React, { useState, useRef } from 'react';
import { Grid, IconButton, Button } from '@mui/material';
import styles from './productCategories.css';
import LCSButton1 from "../../../Components/Header/LCSButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';


function ProductCategories() {

  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };


  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (

    <div className="container">
      <div className="prodArrows">
        {scrollX !== 0 && (
          <Button variant="outlined" size="medium" sx={{ border: "2px solid", color: "#1f74db"}} onClick={() => slide(-200)}>
            <ArrowBackIosIcon />
          </Button>
        )}
        {!scrolEnd && (
          <Button variant="outlined" size="medium" sx={{ border: "2px solid", color: "#1f74db" }} onClick={() => slide(+200)}>
            <ArrowForwardIosIcon />
          </Button>
        )}
      </div>
      <div className="overflow" ref={scrl} onScroll={scrollCheck}>
        <Grid className="blocks" sx={{ display: "inline-flex" }}>
          <Grid item>
            <Box>
              <b>
                Choose from <br /> Business Type
              </b>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <a href="#Auto Service">Auto Service</a>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <a href="#Contracting">Contracting</a>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <a href="#Habitational">Habitational</a>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <a href="#Health Care">Health Care</a>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <a href="#Manufacturing">Manufacturing</a>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <a href="#Office/Professional">Office/Professional</a>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <a href="#Process/Service">Process/Service</a>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <a href="#Wholesale">Wholesale</a>
            </Box>
          </Grid>
        </Grid>

      </div>
    </div>
  );

}

export default ProductCategories;