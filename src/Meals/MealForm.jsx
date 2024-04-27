import { useRef, useState } from 'react';

import Input from '../util/Input';
import Button from '../UI/Button';
import styles from './MealForm.module.css';

export default function MealItemForm (props) {
    const quantityInputRef = useRef(); 
    const [quantityIsValid, setQuantityIsValid] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [quantityTooSmall, setQuantityTooSmall] = useState(true);

    const increaseQuantityHandler = () => {
        if (quantity >= 1) {
            setQuantityTooSmall(false);
        }
        if (quantity >= 5) {
            setQuantityIsValid(false);
            return quantity;
        }
        setQuantity(quantity + 1);
        return quantity;
    }

    const decrementQuantityHandler = () => {
        if (quantity <= 1) {
            setQuantityTooSmall(true);
            return quantity;
        } if (quantity > 4) {
            setQuantityIsValid(true);
        } 
            setQuantity(quantity - 1);
            return quantity;
        
    };

    const submitHandler = event => {
        event.preventDefault();

        const enteredQuantity = quantityInputRef.current.value;
        const enteredQuantityNumber = +enteredQuantity;

        if (
            enteredQuantity.trim().length === 0 ||
            enteredQuantityNumber < 1 ||
            enteredQuantityNumber > 5) {
                setQuantityIsValid(false);
                return;
            }
        
        props.onAddToCart(enteredQuantityNumber);
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.quantity}>
                {quantityTooSmall ? <button className={styles['quantity-disabled']} type='button'>-</button> :
                <button onClick={decrementQuantityHandler} className={styles['quantity-button']} type='button'>-</button>}
                <input 
                    type='text' 
                    value={quantity} 
                    ref={quantityInputRef} 
                    id={'quantity_'+ props.id}
                    className={styles.input}
                />
                {!quantityIsValid ? <button className={styles['quantity-disabled']} type='button'>+</button> :
                <button onClick={increaseQuantityHandler} className={styles['quantity-button']} type='button'>+</button>}
            </div>
            <Button className={styles.button}>Add</Button>
        </form>
    )
};
