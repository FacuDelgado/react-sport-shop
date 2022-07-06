import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="I am the item list Container!" />
    </div>
  );
}

export default App;
