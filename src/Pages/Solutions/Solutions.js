import React from 'react';
import './Solutions.css';
import VendorGrid from "./Components/VendorGrid";
import Searchbar from '../../Components/Searchbar/Searchbar';
import SortByButton from './Components/SortByButton';



function Solutions() {
  

  return (
    <div>
    <div class = 'pos'>
      <div className="wrapSolutions">
    <Searchbar/>
    </div>
    </div>
    <SortByButton/>
    <VendorGrid />
    </div>

  );
}

export default Solutions;