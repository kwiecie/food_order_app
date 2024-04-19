import React from "react";
import styles from './MealItem.module.css';
import Button from "../UI/Button";
import MealForm from "./MealForm";

export default function MealItem (props) {
    return (
        <div className={styles.mealItem}>
            <h3 className={styles.mealItem}>{props.name}</h3>
            <div className={styles.mealItem}>
                <p className={styles.mealItemPrice}>{props.price}</p>
                <p className={styles.mealItemDescription}>{props.description}</p>
            </div>
            <div className={styles.mealItemActions}>
                <MealForm></MealForm>
                <Button>Add to the cart</Button>
            </div>
        </div>
    );
};