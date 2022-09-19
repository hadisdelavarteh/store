import React from 'react';
import { Link } from 'react-router-dom';
import styles from './product.module.css'
import {BsFillStarFill} from 'react-icons/bs'
import Counter from '../Counter';
import { shorter } from '../../helper/functions';

const Product = ({product}) => {

    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.title} />
            <div>
                <p>{shorter(product.title)}</p>
            </div>
            <div className={styles.price_and_rate}>
                <div className={styles.price}>
                    <span>{product.price} <span>$</span></span>
                    <div className={styles.rating}>
                        <BsFillStarFill />
                        <span>{product.rating.rate} ( {product.rating.count} )</span>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Link to={`/products/${product.id}`}>Detiles</Link>
                <Counter />
            </div>
        </div>
    );
};

export default Product;