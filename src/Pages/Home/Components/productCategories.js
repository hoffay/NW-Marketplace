import React, { useState, useRef } from 'react';
import { Grid, IconButton } from '@mui/material';
import styles from './productCategories.css';
import LCSButton1 from "../../../Components/Header/LCSButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


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
          <IconButton onClick={() => slide(-200)}>
            <ArrowBackIosIcon />
          </IconButton>
        )}
        {!scrolEnd && (
          <IconButton onClick={() => slide(+200)}>
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </div>
      <div class="overflow"  ref={scrl} onScroll={scrollCheck}>
        <div class="blocks">
          <b>Choose from Business Type</b>
          <a href="#Food Service">Food Service</a>
          <a href="#Retail">Retail</a>
          <a href="#Hotel/Motel">Hotel/Motel</a>
          <a href="#Farm/Agribusiness">Farm/Agribusiness</a>
          <a href="#Habitational">Habitational</a>
          <a href="#Process/Service">Process/Service</a>
          <a href="#Manufacturing">Manufacturing</a>
          <a href="#Auto Service">Auto Service</a>
          <a href="#Wholesale" >Whole Sale</a>
          <a href="#Contracting">Contracting</a>
          <a href="#Office/Professional">Office/Professional</a>
          <a href="#Health Care" >Health Care</a>
        </div>
      </div>
    </div>
  );

}

export default ProductCategories;