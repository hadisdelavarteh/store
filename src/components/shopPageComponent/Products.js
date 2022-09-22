import React, { useContext } from 'react';
import Product from './Product';
import styles from './products.module.css'
import Loading from '../Loading';
import { contextProduct } from '../../contex/ProductContexProvider';
import { contextCart } from '../../contex/CartContextProvider';
import { ToastContainer } from 'react-toastify';

const Products = () => {

    const {state} = useContext(contextCart);
    const products = useContext(contextProduct);
    return (
        <>
            <div className={styles.products}>
                {Object.keys(products).length !== 0 
                  ? products.map( product => <Product key={product.id} product={product} />)
                  : <Loading />
                }
            </div>
            {state.checkout && <ToastContainer />}
        </>
    );
};

export default Products;