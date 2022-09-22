import React, {useState, useContext} from 'react';
import styles from './details.module.css';
import {BsFillStarFill} from 'react-icons/bs';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { numberQuantity } from '../../helper/functions';
import {contextCart} from '../../contex/CartContextProvider';

const Details = ({product}) => {

    const {state, dispatch} = useContext(contextCart);
    const [counter, setCounter] = useState(!!numberQuantity(state, product.id) ? numberQuantity(state, product.id) : 1);
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
                <div> 
                    <span>number: </span>
                    <div>
                    <AiOutlinePlus onClick={() => setCounter((prevCounter) => prevCounter + 1)} />
                    {counter}
                    <AiOutlineMinus onClick={() => setCounter((prevCounter) => counter > 1 ? prevCounter - 1 : prevCounter)} />
                    </div>
                </div>
                <p> <span>price: </span> <span>{price} $</span>  </p>
                <Link to="/cart" onClick={() => dispatch({type: "ADD_TO_CART", payload: product, counter: counter})}>Add To Cart</Link>
            </div>
        </div>
    );
};

export default Details;