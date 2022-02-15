import React from "react";
import './App.css';
import Searchbar from '../../Components/Searchbar/Searchbar';
import ProductCategories from './Components/productCategories.js'
import Background from '../../Components/Background';
import CLButton from "./Components/clickHereButton";

function Home() {
  return (
    <main>
      <body>
      <Background />
        <div>
          <Searchbar/>
        </div>
        <div>
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
