import React, { useContext } from 'react';
import Header from '../headerComponent/Header';
import Footer from '../footerComponent/Footer';
import Card from './Card';
import {contextCart} from '../../contex/CartContextProvider';

const Cart = () => {

    const {state} = useContext(contextCart)
    return (
        <div>
            <Header />
            <div>
                {!!state.selectedItems.length ? 
                    state.selectedItems.map (item => <Card key={item.id} product={item} />) :
                    <span>There is no product in the shopping cart</span>}
            </div>
            <Footer />
        </div>
    );
};

export default Cart;