import React from "react";
import './App.css';
import Searchbar from '../../Components/Searchbar/Searchbar';
import NavBar from '../../Components/Header/navBar';
import ProductCategories from './Components/productCategories.js'
import Background from '../../Components/Background';

function Home() {
  return (
    <main>
      <header>
        <NavBar/>
      </header>
      <body>
      <Background />
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