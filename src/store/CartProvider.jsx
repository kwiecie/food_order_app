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
                state.totalAmount + action.item.price * action.item.quantity;
            
            // checking if added item is already in cart
            const existingCartItemIndex = state.items.findIndex(
                item => item.id === action.item.id
            );

            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems; 

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    quantity: existingCartItem.quantity + action.item.quantity
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.item);
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        };
        if (action.type === 'REMOVE_ITEM') {
            console.log(action);
            const existingCartItemIndex = state.items.findIndex(
                item => item.id === action.id
            );
            const existingItem = state.items[existingCartItemIndex];
            const updateTotalAmount = 
                state.totalAmount - existingItem.price;

            let updatedItems;

            if (existingItem.quantity === 1) {
                updatedItems = state.items.filter(item => item.id !== action.id);
            }
            else {
                const updatedItem = {
                    ...existingItem, 
                    quantity: existingItem.quantity - 1
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return {
                items: updatedItems,
                totalAmount: updateTotalAmount,
            };
        }
        if (action.type === 'CLEAR_CART') {
            return {
                items: [],
                totalAmount: 0,
            };
        }

        return defaultCartState;
    };

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD_ITEM', item})
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE_ITEM', id})
    };

    const clearCartHandler = () => {
        dispatchCartAction({type: 'CLEAR_CART'})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};