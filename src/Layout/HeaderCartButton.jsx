import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";
import styles from "./HeaderCartButton.module.css";

export default function HeaderCartIcon (props) {
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items?.reduce((currentNumber, item) => 
        currentNumber + item.quantity, 0);

    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    )
}
