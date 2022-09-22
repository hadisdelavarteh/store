import React, {createContext, useReducer} from 'react';

const initialState = {
    selectedItems: [],
    numberItems: 0,
    total: 0,
    checkout: false
}


const cartReducer = (state, action) => {
    switch (action.type){
        case "ADD_ITEM":
            if(!!!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({...action.payload, quantity: 1})
                return {...state, selectedItems: [...state.selectedItems]}
            }
            break;
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter( item => item.id !== action.payload.id);
            return {...state, selectedItems: [...newSelectedItems]}
        case "INC_ITEM":
            const indexI = state.selectedItems.findIndex( item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {...state}
        case "DEC_ITEM":
            const indexD = state.selectedItems.findIndex( item => item.id === action.payload.id);
            if(state.selectedItems[indexD].quantity !== 1)
                state.selectedItems[indexD].quantity --;
            return {...state}
        default:
            return state;
    }
}

export const contextCart = createContext();

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <contextCart.Provider value={{state, dispatch}}>
            {children}
        </contextCart.Provider>
    );
};

export default CartContextProvider;