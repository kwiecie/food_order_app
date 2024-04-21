import React, { useContext } from "react";
import styles from './MealItem.module.css';
import Button from "../UI/Button";
import MealForm from "./MealForm";
import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/cart-context";

export default function MealItem (props) {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = quantity => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            quantity: quantity,
            price: props.price
        })
    }

    return (
        <li className={styles['meal-item']}>
            <article className={styles['meal-item']}>
                <img src={`http://localhost:3000/${props.image}`}  alt={props.name + ` image`}/>
                <div>
                    <h3>{props.name}</h3>
                    <p className={styles['meal-item-price']}>{currencyFormatter.format(props.price)}</p>
                    <p className={styles['meal-item-description']}>{props.description}</p>
                </div>
                <div className={styles['meal-item-actions']}>
                    <MealForm id={props.id} onAddToCart={addToCartHandler}/>
                </div>
            </article>
        </li>
    );
};