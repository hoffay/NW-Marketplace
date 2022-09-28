import React from "react";
import './App.css';
import Searchbar from '../../Components/Searchbar/Searchbar';
import ProductCategories from './Components/productCategories.js'
import Background from '../../Components/Background';
import CLButton from "./Components/clickHereButton";
import CMLogo from "./Components/CMLogo";
import PopChat from "./Components/Popchat";

const msg=['hello, friend']

 let getMessage = (msg) => {
   console.log(msg)
 }

function Home() {
  alert("Note: Search bars will not work due to removal of API");
  return (
    <main>
      <body>
      <Background />
      <CMLogo />
        <div className="wrap">
          <Searchbar />
          <CLButton/> 
        </div>
        <PopChat messages={msg} getMessage={getMessage} />
      </body>
      <div>
        <ProductCategories/>
      </div>
    </main>
  );
}

export default Home;
