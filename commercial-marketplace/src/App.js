import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import Header from './Components/Header/Header';

function App() {
  return (
    <main>
      <div>
        <Header />
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