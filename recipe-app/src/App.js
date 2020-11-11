import React,{useEffect,useState} from 'react';
import Recipe from './components/Recipe';
import './App.css';

const App = () =>{

  const APP_ID = "ec0b9784";
  const APP_KEY = "82aa623f8ed9c1063bb8b1b29f088412";

  const [recipes, setRecipes]=useState([]);
  const [search, setSearch]=useState('');
  const [query, setQuery]=useState("chicken")

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault(); //To prevent page refresh every time on input change
    setQuery(search);
    setSearch('');
  }
  
  return(
    <div className="App">
      <div className="top-bar">
        Search Recipe:
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">Submit</button>
        </form>
      </div>
      <div className="recipes">
        {recipes.map(recipe=>(
          <Recipe
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}/>
        ))}
      </div>
    </div>
  );
}

export default App;
