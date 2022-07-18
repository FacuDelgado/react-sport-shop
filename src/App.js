import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import {Cloudinary} from "@cloudinary/url-gen";

function App() {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dctr9jrf9'
    }
  });

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
