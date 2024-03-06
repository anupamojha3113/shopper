import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSingup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory Category="men" />} />
          <Route path='/womens' element={<ShopCategory Category="women"/>} />
          <Route path='/kids' element={<ShopCategory Category="kid"/>} />
          <Route path="/product" element={<Product />} >
               <Route path=":productId" element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/cart' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
