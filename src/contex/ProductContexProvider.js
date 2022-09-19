import React, { createContext, useEffect, useState } from 'react';
import { getProducts } from '../services/api';

export const contextProduct = createContext();

const ProductContexProvider = (props) => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        const fetchAPI = async() => {
            setProducts( await getProducts() )
        }
        fetchAPI();
    }, [])
    
    return (
        <contextProduct.Provider value={products}>
            {props.children}
        </contextProduct.Provider>
    );
};

export default ProductContexProvider;