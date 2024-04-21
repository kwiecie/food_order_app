import React, { useReducer } from "react";

import CartContext from "./cart-context";

export default function CartProvider(props) {

    const defaultCartState = {
        items: [],
        totalAmount: 0,
    };
    
    const cartReducer = (state, action) => {
        if (action.type === 'ADD_ITEM') {
            const updatedTotalAmount =
                state.totalAmount + action.item.price * action.item.amount;
            
            // checking if added item is already in cart
            const existingCartItemIndex = state.items.findIndex(
                item => item.id === action.item.id
            );

            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems; 

            if (existingCartItem) {
                const updatedItems = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                };
            } else {
                updatedItems = state.items.concat(action.item);
                //updatedItems = action.items.concat(action.item);
                //updatedItems = action.items.push(action.item);
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }
        if (action.type === 'REMOVE_ITEM') {
            const existingCartItemIndex = state.items.findIndex(
                item => item.id === action.item.id
            );
            const existingCartItem = state.items[existingCartItemIndex];
            const updateTotalAmount = 
                state.totalAmount - existingCartItem.price;

            let updatedItems;

            if (existingCartItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.id);
            }
            else {
                const updatedItems = {
                    ...existingCartItem, 
                    amount: existingCartItem.amount - 1
                };
            }
            return {
                items: updatedItems,
                totalAmount: updateTotalAmount,
            };
        }
        return defaultCartState;
    };

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD_ITEM', item: item})
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE_ITEM', id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};