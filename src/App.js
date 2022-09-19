import React from 'react';
import SignUp from './components/login&signupComponent/SignUp';
import Login from './components/login&signupComponent/Login';
import { Switch, Route, Redirect } from 'react-router-dom';
import SingleProduct from './components/singleProductComponent/SingleProduct';
import Home from './components/homePageComponent/Home';
import './app.css';
import ProductContexProvider from './contex/ProductContexProvider';
import Products from './components/shopPageComponent/Products';

const App = () => {
  return (
    <div>
        <ProductContexProvider>
          <Switch>
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/products/:id' component={SingleProduct} />
            <Route path='/products' component={Products} />
            <Redirect to='/Products' />
          </Switch>
        </ProductContexProvider>
    </div>
  );
};

export default App;