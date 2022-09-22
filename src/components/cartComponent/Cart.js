import React, { useContext } from 'react';
import Card from './Card';
import {contextCart} from '../../contex/CartContextProvider';
import CheckoutBox from './CheckoutBox';

const Cart = () => {

    const {state} = useContext(contextCart);
    return (
        <div>
            <div>
                <div>
                    {!!state.selectedItems.length ? 
                        state.selectedItems.map (item => <Card key={item.id} product={item} />) :
                        <span>There is no product in the shopping cart</span>}
                </div>
                <div>
                    <CheckoutBox />
                </div>
            </div>
        </div>
    );
};

export default Cart;