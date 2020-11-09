import React,{useEffect,useState} from 'react';
import './App.css';

const App = () =>{

  const APP_ID = "ec0b9784";
  const APP_KEY = "82aa623f8ed9c1063bb8b1b29f088412";

  useEffect(()=>{
    getRecipes();
  },[]);

  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json();
    console.log(data);
  }
  
  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
