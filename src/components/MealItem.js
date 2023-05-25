import React from 'react'
import { Link } from 'react-router-dom';


export default function MealItem(props) {
    const { strMeal, strMealThumb, idMeal } = props;

    return (
        <div className="card blue-grey darken-2 white-text">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">

                <h3 className="card-title"><b>{strMeal}</b></h3>
            </div>
            <div className='card-action'>
                <Link to={`/meal/${idMeal}`} className='btn'>Watch Reciepe</Link>
            </div>
        </div>
    )
}
