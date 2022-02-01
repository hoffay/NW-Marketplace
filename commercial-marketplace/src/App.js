import './App.css';
import NavBar from './Components/Header/navBar';
import ProductCategories from './Components/Header/productCategories';
function App() {
  return (
    <main>
      <div>
        <NavBar/>
      </div>
      <div>
        <ProductCategories/>
      </div>
    </main>
  );
}

export default App;
