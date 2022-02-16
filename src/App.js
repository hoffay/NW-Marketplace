import Searchbar from './Components/Searchbar/Searchbar';
import Header from './Components/Header/Header';

import NavBar from './Components/Header/navBar';
import ProductCategories from './Components/Header/productCategories';

import Background from './Components/Background';

function App() {
  return (
    <main>
      <div>
        <NavBar/>
      </div>
      <body>
        <div>
          <Background/>
          <Searchbar/>
        </div>
      </body>
      <div>
        <ProductCategories/>
      </div>
    </main>
  );
}

export default App;
