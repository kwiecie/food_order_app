import React, { useEffect, useState } from 'react';

import MealItem from "./MealItem";
import styles from './Meals.module.css';
import useHttp from '../hooks/useHttp';
import Error from '../util/Error';

const requestConfig = {};

export default function Meals () {
  const {
    data : loadedMeals, 
    isLoading, 
    error
  } =  useHttp(import.meta.env.VITE_APP_MEALS, requestConfig, []);
  //useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return (
      <div className={styles.loader}></div>
      )
  }

  if (error) {
    return <Error className={styles.error} title='Failed to fetch meals :(' message={error} />
  }

  // const [filteredCategory, setFilteredCategory] = useState('Desserts');

  // const filterChangeHandler = (event) => {
  //   setFilteredCategory(event.target.value);
  // }

  // const filteredMeals = loadedMeals.filter(meal => {
  //   return meal.category === filteredCategory
  // });

  // console.log(loadedMeals.category);

  // <div>
  //           <label>Filter</label>
  //           <select value={filteredCategory} onChange={filterChangeHandler}>
  //             <option value='All'>All</option>
  //             <option value='Main courses'>Main courses</option>
  //             <option value='Desserts'>Desserts</option>
  //           </select>
  //         </div>

  //const mealList = filteredMeals.map(meal => (
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