import React, {createContext, useReducer} from 'react';
import { notify } from '../helper/toast';

const initialState = {
    selectedItems: [],
    numberItems: 0,
    total: 0,
    checkout: false
}

export const sumItems = items => {
    const numberItems = items.reduce( (total , item) => total + item.quantity, 0);
    const total = items.reduce( (total , item) => total + item.price * item.quantity, 0).toFixed(2);
    return {total, numberItems};
}

const cartReducer = (state, action) => {
    switch (action.type){
        case "ADD_ITEM":
            if(!!!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({...action.payload, quantity: 1})
                return {
                    ...state, 
                    selectedItems: [...state.selectedItems], 
                    ...sumItems(state.selectedItems),
                    checkout: false
                }
            }
            break;
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter( item => item.id !== action.payload.id);
            return {
                ...state, 
                selectedItems: [...newSelectedItems], 
                ...sumItems(newSelectedItems)
            }
        case "INC_ITEM":
            const indexI = state.selectedItems.findIndex( item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state, 
                ...sumItems(state.selectedItems)
            }
        case "DEC_ITEM":
            const indexD = state.selectedItems.findIndex( item => item.id === action.payload.id);
            if(state.selectedItems[indexD].quantity !== 1)
                state.selectedItems[indexD].quantity --;
            return {
                ...state, 
                ...sumItems(state.selectedItems)
            }
        case "ADD_TO_CART":
            const index = state.selectedItems.findIndex(item => item.id === action.payload.id);
            if(index >= 0){
              state.selectedItems[index].quantity = action.counter;
              return {...state, ...sumItems(state.selectedItems)};
            } else {
              state.selectedItems.push({...action.payload, quantity: action.counter});
              return {...state, ...sumItems(state.selectedItems)};
            }
        case "CHECKOUT":
            notify("Your account has been cleared", "success");
            return {
                selectedItems: [],
                numberItems: 0,
                total: 0,
                checkout: true
            }
        case "CLEAR":
            notify("The shopping cart has been cleared", "success");
            return {
                selectedItems: [],
                numberItems: 0,
                total: 0,
                checkout: false
            }
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