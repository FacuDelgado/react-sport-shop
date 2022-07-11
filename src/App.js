import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer/>
    </div>
  );
}

export default App;
