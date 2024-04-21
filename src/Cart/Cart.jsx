import { useContext } from "react"
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../Layout/Modal";
import Button from "../UI/Button";

import styles from "./Cart.module.css";

export default function Cart (props) {
    
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const cartItemRemoveHandler = (item) => {
        cartCtx.removeItem(item);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, quantity: 1});
    };

    const cartItems = cartCtx.items?.map(item => (
        <CartItem 
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        />
    ));
    console.log(cartCtx);
    
    return (
        <Modal onClose={props.onCloseCart}>
            <ul>
                {cartItems}
            </ul>
            <div>
                <span>Total Amount:</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <Button className={styles['button--alt']} onClick={props.onCloseCart}>Close</Button>
                {cartCtx.items.length > 0 && <Button className={styles.button}>Order</Button>}
            </div>
        </Modal>
    );
}