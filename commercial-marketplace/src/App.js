import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import Header from './Components/Header/Header';

import NavBar from './Components/Header/navBar';
function App() {
  return (
    <main>
      <div>
        <NavBar/>
      </div>
      <body>
        <div>
          <Searchbar placeholder="Enter text here" />
        </div>
      </body>
    </main>
  );
}

export default App;