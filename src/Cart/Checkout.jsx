import { useContext } from "react";
import Modal from "../Layout/Modal";
import CartContext from "../store/cart-context";
import { currencyFormatter } from "../util/formatting";
import Input from "../UI/Input";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Button from "../UI/Button";

import styles from "./Checkout.module.css";

const requestConfig = { 
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    }
};

export default function Checkout(props) {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const { 
        data, 
        isLoading: isSending, 
        error, 
        sendRequest, 
        clearData 
    } = useHttp('https://adorable-pie-8b5577.netlify.app/orders', requestConfig);

    const handleHideCheckout = () => {
        userProgressCtx.hideCheckout();
    };

    const handleFinish = () => {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    if (userProgressCtx?.progress !== 'checkout') {
        return null;
    };

    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        sendRequest(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData
            }
        }));
    }

    let actions = (
        <>
            <div className={styles['modal-actions']}>
                <Button type="button" onClick={handleHideCheckout} className={styles['button--alt']}>Close</Button>
                <Button type="submit" className={styles.button}>Submit Order</Button>
            </div>
        </>
    );

    if (isSending) {
        actions = <p>Sending order data...</p>
    };

    if (data && !error) {
        return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleFinish}>
            <h2>Success!</h2>
            <p>Your order has been successfully submitted!</p>
            <Button onClick={handleFinish} className={styles.button}>Okay</Button>
        </Modal>
    }

    return (
        <Modal onClose={handleHideCheckout} open={userProgressCtx.progress === 'checkout'}>
            <form onSubmit={handleSubmit} className={styles.control}>
                <h2>Checkout</h2>
                <p className={styles.control}>Total amount: {currencyFormatter.format(cartCtx.totalAmount)}</p>
                <Input label="Full name" type="text" id="name" className={styles['control-row']}/>
                <Input label="E-Mail address" type="email" id="email" className={styles['control-row']}/>
                <Input label="Phone number" type="text" id="phone-number" className={styles['control-row']}/>
                <Input label="Street" type="text" id="street" className={styles['control-row']}/>
                <div className={styles['control-row']}>
                    <Input label="Postal code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>
                {error && <Error title='Failed to submit order' message={error}/>}
                {actions}
            </form>
        </Modal>
    )
};