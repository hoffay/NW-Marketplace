import {React, useState, useCallback} from 'react';
import './Solutions.css';
import VendorGrid from "./Components/VendorGrid";
import Searchbar from '../../Components/Searchbar/Searchbar';
import Background from '../../Components/Background';
import { vendors } from '../../VendorData';




function Solutions() {
  const [page, setPage] = useState("")
  const resetPage = useCallback(() => {setPage("data refresh")}, [setPage])

  const doSomething = function (e) {
    console.log('WORKING')
    //setData("");
  }
  
  const [data, setData] = useState(vendors);

  return (
    <div>
      <div className="backgroundWrap"><Background /></div>
      <div class = 'pos'>
        <div className="wrapSolutions">
          <div className="searchbar">
        <Searchbar page={page} setPage={resetPage}/>
        </div>
          </div>
        </div>
      <div> <VendorGrid data={data}/></div>
    </div>


  );
}

export default Solutions;
