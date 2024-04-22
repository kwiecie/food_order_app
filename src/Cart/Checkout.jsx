import { useContext } from "react";
import Modal from "../Layout/Modal";
import CartContext from "../store/cart-context";
import { currencyFormatter } from "../util/formatting";
import Input from "../UI/Input";
import UserProgressContext from "../store/UserProgressContext";
import Button from "../UI/Button";

export default function Checkout(props) {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const handleHideCheckout = () => {
        userProgressCtx.hideCheckout();
    };

    if (userProgressCtx?.progress !== 'checkout') {
        return null;
    };

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <Modal onClose={handleHideCheckout} open={userProgressCtx.progress === 'checkout'}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total amount: {currencyFormatter.format(cartCtx.totalAmount)}</p>
                <Input label="Full name" type="text" id="full-name"/>
                <Input label="E-Mail address" type="email" id="email" />
                <Input label="Phone number" type="text" id="phone-number" />
                <Input label="Street" type="text" id="street" />
                <div>
                    <Input label="Postal code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>
                <Button type="button" onClick={handleHideCheckout}>Close</Button>
                <Button type="submit">Submit Order</Button>
            </form>
        </Modal>
    )
};