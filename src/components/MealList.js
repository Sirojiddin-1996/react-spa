import React from 'react'
// import { useHistory } from 'react-router-dom'
import MealItem from './MealItem'

export default function MealList({ meals }) {
    // const { goBack } = useHistory()
    return (
        <div className='list'>

            {meals.map(meal => (
                <MealItem key={meal.idMeal} {...meal} />
            ))}
        </div>
    )
}
