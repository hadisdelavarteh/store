import React from 'react';
import styles from './details.module.css';
import {BsFillStarFill} from 'react-icons/bs';
import Counter from '../Counter';

const Details = ({product}) => {

    const {title, description, category, price, image, rating:{rate, count}} = product;

    return (
        <div className={styles.details}>
            <div className={styles.image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.box_description}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
                <div className={styles.rating}>
                    <div>
                        <BsFillStarFill />
                        <span> {rate} ( <span className={styles.color}>{count} views</span> )</span>
                    </div>
                    <p>category: <span className={styles.color}>{category}</span></p>
                </div>
            </div>
            <div className={styles.box_card}>
                <div> <span>number: </span> <Counter className={styles.counter}/> </div>
                <p> <span>price: </span> <span>{price} $</span>  </p>
                <button>View cart</button>
            </div>
        </div>
    );
};

export default Details;