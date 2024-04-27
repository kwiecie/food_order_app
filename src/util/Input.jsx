import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        //<div className={styles.control}>
        <div>
            <label htmlFor={props.input.id} className={styles.label}>{props.label}</label>
            <input ref={ref} id={props.input.id} required {...props.input} className={styles.input}/>
        </div>
    )
});

export default Input;