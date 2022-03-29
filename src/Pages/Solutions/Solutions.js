import React from 'react';
import './Solutions.css';
import VendorGrid from "./Components/VendorGrid";
import Searchbar from '../../Components/Searchbar/Searchbar';
import Background from '../../Components/Background';
import CategoryTitles from './Components/CategoryTitles';





function Solutions() {
  return (
    <div>
      <div className="backgroundWrap"><Background /></div>
      <div class = 'pos'>
        <div className="wrapSolutions">
          <div className="searchbar">
        <Searchbar/>
        </div>
        <CategoryTitles />
          </div>
        </div>
      <div> <VendorGrid /></div>
    </div>


  );
}

export default Solutions;
