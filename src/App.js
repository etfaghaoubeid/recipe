import React ,{useState,useEffect}from 'react';
import './App.css';

import {APP_KEY,APP_ID} from "./config/kes"
import Recipe from './components/Recipe';

function App() {
  const [search,setSerch] = useState('chicken');
  const [recipes,setRecipe] =  useState([]);
  let URL = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
  const getRecipe = async ()=>{
    let response  = await fetch(URL)
    let data = await response.json()
    setRecipe(data.hits)
    console.log(data)
    return ;
  }
  useEffect(()=>{
    getRecipe()
  },[getRecipe])

  return (
    <div className="search-from">
    <form  >
      <input type="text" onChange={()=>setRecipe()}/>
      <button type="submit"> Search</button>
    </form>
    {
      recipes.map(recipe=>
        <Recipe recipie/>
        )
      }
      {

      console.log(recipes)
      }
    </div>
  );
}

export default App;
