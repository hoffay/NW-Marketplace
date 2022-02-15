import React from 'react';
import './Solutions.css';
import VendorGrid from "./Components/VendorGrid";
import Searchbar from '../../Components/Searchbar/Searchbar';


function Solutions() {
  

  return (
    <div>
    <div class = 'pos'>
    <Searchbar/>
    </div>
    <VendorGrid />
    </div>

  );
}

export default Solutions;