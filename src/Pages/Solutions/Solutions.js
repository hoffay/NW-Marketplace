import React from 'react';
import './Solutions.css';
import VendorGrid from "./Components/VendorGrid";
import Searchbar from '../../Components/Searchbar/Searchbar';





function Solutions() {
  

  return (
    <div>
      <div class = 'pos'>
        <div className="wrapSolutions">
        <Searchbar/>
          </div>
        </div>
      <div> <VendorGrid /></div>
    </div>


  );
}

export default Solutions;