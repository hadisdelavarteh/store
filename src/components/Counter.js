import React, { useContext } from 'react';
import { BiTrash } from 'react-icons/bi';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styles from './counter.module.css';
import {contextCart} from '../contex/CartContextProvider';
import { selectedProduct, numberQuantity, oneOrGreater } from '../helper/functions';

const Counter = ({product}) => {
    
    const {state, dispatch} = useContext(contextCart);
    console.log(oneOrGreater(state, product.id));
    return (
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
    );
};

export default Counter;