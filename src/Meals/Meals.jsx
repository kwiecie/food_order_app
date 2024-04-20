import React, { useEffect, useState } from 'react';

import MealItem from "./MealItem";
import styles from './Meals.module.css';

export default function Meals () {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch('http://localhost:3000/meals');
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const meals = await response.json();
        setLoadedMeals(meals);
        setError (null);
      } catch (err) {
        setError(err.message);
        setLoadedMeals([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
  }, []);

    const mealList = loadedMeals.map(meal => (
        <MealItem 
            key={meal.id} 
            id={meal.id} 
            name={meal.name} 
            price={meal.price} 
            description={meal.description} 
        />
    ));

    return (
        <div className={styles.meals}>
          <ul>
              {mealList}
          </ul>
        </div>
    )
}