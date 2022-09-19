import React, { useContext } from 'react';
import Product from './Product';
import styles from './products.module.css'
import Loading from '../Loading';
import { contextProduct } from '../../contex/ProductContexProvider';
import Footer from '../footerComponent/Footer';
import Header from '../headerComponent/Header';

const Products = () => {

    const products = useContext(contextProduct);
    return (
        <>
            <div className={styles.header}> 
                <Header />
            </div>
            <div className={styles.products}>
                {Object.keys(products).length !== 0 
                  ? products.map( product => <Product key={product.id} product={product} />)
                  : <Loading />
                }
            </div>
            <Footer />
        </>
    );
};

export default Products;