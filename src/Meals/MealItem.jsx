import React from "react";
import styles from './MealItem.module.css';
import Button from "../UI/Button";
import MealForm from "./MealForm";

export default function MealItem (props) {
    //const price = `$${props.price?.toFixed(2)}`;

    return (
        <div className={styles.mealItem}>
            <h3 className={styles.mealItem}>{props.name}</h3>
            <div className={styles.mealItem}>
                <p className={styles.mealItemPrice}>{props.price}</p>
                <p className={styles.mealItemDescription}>{props.description}</p>
            </div>
            <div className={styles.mealItemActions}>
                <MealForm />
            </div>
        </div>
    );
};