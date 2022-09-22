import React from 'react';
import SignUp from './components/login&signupComponent/SignUp';
import Login from './components/login&signupComponent/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import SingleProduct from './components/singleProductComponent/SingleProduct';
import './app.css';
import ProductContexProvider from './contex/ProductContexProvider';
import Products from './components/shopPageComponent/Products';
import CartContextComponent from './contex/CartContextProvider';
import Cart from './components/cartComponent/Cart';
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';

const App = () => {

  return (
    <div>
      <ProductContexProvider>
        <CartContextComponent>
          <Header />
          <Routes>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/products/:id' element={<SingleProduct />}/>
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/*' element={<Navigate to='/products' />} />
          </Routes>
          <Footer />
        </CartContextComponent>
      </ProductContexProvider>
    </div>
  );
};

export default App;