import React from 'react';
import './Solutions.css';
import VendorGrid from "./Components/VendorGrid";
import Searchbar from '../../Components/Searchbar/Searchbar';


function Solutions() {
  

  return (
    <main>
    <div class = 'pos'>
    <Searchbar />
    </div>
    <div>
    <VendorGrid />
    </div>
    </main>
  );
}

export default Solutions;