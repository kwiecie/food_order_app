import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store/cart-context";
import styles from "./HeaderCartButton.module.css";
import UserProgressContext from "../store/UserProgressContext";

export default function HeaderCartIcon (props) {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const { items } = cartCtx;

    const numberOfCartItems = items?.reduce((currentNumber, item) => 
        currentNumber + item.quantity, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    };
    console.log(userProgressCtx.progress);

    return (
        <button className={styles.button} onClick={handleShowCart}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button>
    )
}
