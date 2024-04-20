import { useContext } from "react"
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import Modal from "../Layout/Modal";

export default function Cart (props) {
    
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartItems = cartCtx?.map(item => (
        <CartItem 
            key={item.id}
            name={item.name}
            amount={item.amount}
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
                <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
                {cartCtx.items.length > 0 && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    );
}