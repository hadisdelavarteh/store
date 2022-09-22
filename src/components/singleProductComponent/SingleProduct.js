import React, { useContext } from 'react';
import {useParams} from 'react-router-dom';
import Loading from '../Loading';
import Details from './Details';
import styles from './singleProduct.module.css';
import {contextProduct} from '../../contex/ProductContexProvider';

const SingleProduct = () => {

    const {id} = useParams();
    const products = useContext(contextProduct);
    const product = products[id - 1];

    return (
        <div className={styles.single}>
            { !!product ? <Details product={product} /> : <Loading /> }
        </div>
    );
};

export default SingleProduct;