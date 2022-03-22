import React from 'react';
import './Solutions.css';
import VendorGrid from "./Components/VendorGrid";
import Searchbar from '../../Components/Searchbar/Searchbar';
import Background from '../../Components/Background';





function Solutions() {
  return (
    <div>
      <div className="backgroundWrap"><Background /></div>
      <div class = 'pos'>
        <div className="wrapSolutions">
          <div className="searchbar">
        <Searchbar/>
        </div>
          </div>
        </div>
      <div> <VendorGrid /></div>
    </div>


  );
}

export default Solutions;
