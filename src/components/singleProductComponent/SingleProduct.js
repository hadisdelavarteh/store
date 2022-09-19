import React, { useContext } from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../Loading';
import Details from './Details';
import Header from '../headerComponent/Header';
import styles from './singleProduct.module.css';
import Footer from '../footerComponent/Footer';
import {contextProduct} from '../../contex/ProductContexProvider';

const SingleProduct = () => {

    const {id} = useParams();
    const products = useContext(contextProduct);
    const product = products[id - 1];

    return (
        <div className={styles.single}>
            <Header />
            { !!product ? <Details product={product} /> : <Loading /> }
            <Footer />
        </div>
    );
};

export default SingleProduct;