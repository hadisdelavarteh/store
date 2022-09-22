import React, {useContext} from 'react';
import {contextCart} from '../../contex/CartContextProvider';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Card = ({product}) => {

    const {dispatch} = useContext(contextCart);
    return (
        <div  style={{display:"flex", flexWrap: "wrap", alignContent: "space-between", justifyContent: "space-between"}}>
            <div>
                <img style={{width:"200px"}} src={product.image} alt="product" />
            </div>
            <div>
                <span>{product.title}</span>
            </div>
            <div>
                <span>{product.price}</span>
            </div>
            <div>
                <AiOutlinePlus onClick={() => dispatch({type: "INC_ITEM", payload: product})} />
                <span>{product.quantity}</span>
                <AiOutlineMinus onClick={() => dispatch({type: "DEC_ITEM", payload: product})} />
            </div>
            <div>
                <span>{product.price*product.quantity}</span>
            </div>
            <div>
                <span onClick={() => dispatch({type: "REMOVE_ITEM", payload: product})}>Delete</span>
            </div> 
        </div>
    );
};

export default Card;