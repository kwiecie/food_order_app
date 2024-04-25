import { useContext } from "react"
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../Layout/Modal";
import Button from "../UI/Button";

import styles from "./Cart.module.css";
import UserProgressContext from "../store/UserProgressContext";

export default function Cart (props) {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

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
    console.log(cartCtx, userProgressCtx?.progress);

    if (userProgressCtx?.progress !== 'cart') {
        return null;
    };
    
    return (
        <Modal onClose={props.onCloseCart}  open={userProgressCtx.progress === 'cart'}>
            <ul  className={styles.cart}>
                {cartItems}
            </ul>
            <div className={styles['cart-total']}>
                <span>Total Amount:</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles['modal-actions']}>
                <Button className={styles['button--alt']} onClick={userProgressCtx.hideCart}>Close</Button>
                {cartCtx.items.length > 0 && <Button className={styles.button} onClick={userProgressCtx.showCheckout}>Order</Button>}
            </div>
        </Modal>
    );
}