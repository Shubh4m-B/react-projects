import React,{useEffect,useState} from 'react';
import Recipe from './components/Recipe';
import './App.css';

const App = () =>{

  const APP_ID = "ec0b9784";
  const APP_KEY = "82aa623f8ed9c1063bb8b1b29f088412";

  const [recipes, setRecipes]=useState([]);

  useEffect(()=>{
    getRecipes();
  },[]);

  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=chocolate&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
  
  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Submit</button>
      </form>
      {recipes.map(recipe=>(
        <Recipe
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
