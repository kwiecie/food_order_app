import React, { useEffect, useState } from 'react';

import MealItem from "./MealItem";
import styles from './Meals.module.css';
//import errStyles from '../util/Error.module.css';
import useHttp from '../hooks/useHttp';
import Error from '../util/Error';

const requestConfig = {};

export default function Meals () {
  const {
    data : loadedMeals, 
    isLoading, 
    error
  } =  useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return (
      <div className={styles.loader}></div>
      )
  }

  if (error) {
    return <Error className={styles.error} title='Failed to fetch meals :(' message={error} />
  }

    const mealList = loadedMeals.map(meal => (
        <MealItem 
            key={meal.id} 
            id={meal.id} 
            image={meal.image}
            name={meal.name} 
            price={meal.price} 
            description={meal.description} 
        />
    ));

    return (
        <div >
          <ul id="meals" className={styles.meals}>
              {mealList}
          </ul>
        </div>
    )
}