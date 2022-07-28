import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'
import Cart from './components/Cart';
import {Cloudinary} from "@cloudinary/url-gen";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/cartContext';

function App() {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dctr9jrf9'
    }
  });

  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
