import React from "react";
import './App.css';
import Searchbar from '../../Components/Searchbar/Searchbar';
import ProductCategories from './Components/productCategories.js'
import Background from '../../Components/Background';
import CLButton from "./Components/clickHereButton";
import CMLogo from "./Components/CMLogo";

function Home() {
  return (
    <main>
      <body>
      <Background />
      <CMLogo />
        <div className="wrap">
          <Searchbar />
          <CLButton/>
        </div>
      </body>
      <div>
        <ProductCategories/>
      </div>
    </main>
  );
}

export default Home;
