import { useRef, useState } from 'react';

import Input from '../util/Input';
import Button from '../UI/Button';
import styles from './MealForm.module.css';

export default function MealItemForm (props) {
    const amountInputRef = useRef(); 
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5) {
                setAmountIsValid(false);
                return;
            }
        
        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input 
                // id={props.id}
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <Button>Add</Button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)!</p>}
        </form>
    )
};
