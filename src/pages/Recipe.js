import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getMealById } from '../api'
import Loader from '../components/Loader'


export default function Recipe() {
    const { id } = useParams()
    const { goBack } = useHistory()
    const [recipe, setRecipe] = useState([])
    const [showRecipe, setShowRecipe] = useState(false)
    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [])
    const handleRecipeShow = () => {
        setShowRecipe(!showRecipe)
    }
    return (
        <>
            <button className='btn' onClick={goBack} style={{ display: 'flex', textAlign: 'center', fontWeight: "bold" }}> <i class="material-icons">arrow_back</i> go back</button>
            {!recipe.idMeal ? <Loader /> : (
                <div className='recipe  white-text'>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h6><b>Category:</b> {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6><b>Area:</b> {recipe.strArea}</h6> : null}
                    <p style={{ textAlign: 'justify' }}>{recipe.strInstructions}</p>
                    <button onClick={handleRecipeShow} className='btn'>Show Recipe</button>
                    {showRecipe ? (
                        <table>
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Measure</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Object.keys(recipe).map(key => {
                                    if (key.includes('Ingredient') && recipe[key]) {
                                        return (
                                            <tr>
                                                <td>{recipe[key]}</td>
                                                <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                            </tr>
                                        )
                                    }
                                })}
                            </tbody>
                        </table>
                    ) : null}


                    {recipe.strYoutube ? (
                        <div className='row'>
                            <h4>Video recipe</h4>
                            <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen frameBorder='0' />
                        </div>
                    ) : null}

                </div>
            )}
        </>
    )
}
