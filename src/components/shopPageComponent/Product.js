import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from './product.module.css'
import {BsFillStarFill} from 'react-icons/bs'
import { shorter } from '../../helper/functions';
import { BiTrash } from 'react-icons/bi';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {contextCart} from '../../contex/CartContextProvider';
import { selectedProduct, numberQuantity, oneOrGreater } from '../../helper/functions';
 
const Product = ({product}) => {

    const {state, dispatch} = useContext(contextCart);

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
                <div className={styles.addToCart}>
                    {selectedProduct(state, product.id) ?
                        <AiOutlinePlus onClick={() => dispatch({type: "INC_ITEM", payload: product})} />:
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: product})}>Add Item</button>
                    }
                    <span>{numberQuantity(state, product.id)}</span>
                    {(selectedProduct(state, product.id)) && (oneOrGreater(state, product.id) ?
                        <BiTrash onClick={() => dispatch({type: "REMOVE_ITEM", payload: product})} /> : 
                        <AiOutlineMinus onClick={() => dispatch({type: "DEC_ITEM", payload: product})}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;