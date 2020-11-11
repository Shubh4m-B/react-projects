import React from 'react'
import styles from '../recipe.module.css';

const Recipe=({title,calories,image,ingredients})=> {
    return (
        <div className={styles.recipe}>
            <img className={styles.image} src={image} alt="img"/>
            <h1 className={styles.title}>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
            <div className={styles.calories}>Calories: {calories}</div>
        </div>
    );
}

export default Recipe
