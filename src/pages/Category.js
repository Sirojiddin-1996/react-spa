import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { getFilterCategory } from '../api'
import Loader from '../components/Loader'
import MealList from '../components/MealList'


export default function Category() {
    const { name } = useParams()
    const { goBack } = useHistory()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        getFilterCategory(name).then(data => setMeals(data.meals))
    }, [name])

    return (
        <>
            <button className='btn' onClick={goBack} style={{ display: 'flex', textAlign: 'center', fontWeight: "bold" }}> <i class="material-icons">arrow_back</i> go back</button>
            {!meals.length ? <Loader /> : <MealList meals={meals} />}
        </>
    )
}
