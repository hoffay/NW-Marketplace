import './App.css';
import Searchbar from './Pages/Components/Searchbar/Searchbar';
import Header from './Pages/Components/Header/Header';

import NavBar from './Pages/Components/Header/navBar';
import ProductCategories from './Pages/Components/Header/productCategories';
function App() {
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

export default App;
