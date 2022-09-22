import React, {useContext} from 'react';
import {contextCart} from '../../contex/CartContextProvider';
import {Link} from 'react-router-dom';

const CheckoutBox = () => {

    const {state, dispatch} = useContext(contextCart);

    return (
        <>
            <div>
                <div> 
                    <p> <span>total price : </span> {state.total} $ </p>
                    <p> total number : <span> {state.numberItems} </span> </p>
                    <p>cost send: <span>Free</span></p>
                </div>
                <Link to="/product" onClick={ () => dispatch({type: "CHECKOUT"})}>Checkout</Link>
                <Link to="/product" onClick={ () => dispatch({type: "CLEAR"})}>Clear</Link>
            </div>
        </>
    );
};

export default CheckoutBox;