import React from "react";
import './App.css';
import Searchbar from '../../Components/Searchbar/Searchbar';
import NavBar from '../../Components/Header/navBar';
import ProductCategories from './Components/productCategories.js';

function Home() {
  return (
    <main>
      <div>
        <NavBar/>
      </div>
      <body>
        <div>
          <Searchbar />
        </div>
      </body>
      <div>
        <ProductCategories/>
      </div>
    </main>
  );
}

export default Home;