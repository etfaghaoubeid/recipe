
import React ,{useState,useEffect}from 'react';

import { Button,Row ,Form, FormGroup, Label, Input, FormText } from 'reactstrap';


import {APP_KEY,APP_ID} from "../../config/keys"
import Recipe from './Recipe';


function RecipesContainer() {
  const [search,setSerch] = useState('chicken');
  const [recipes,setRecipe] =  useState([]);
  let URL= `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getRecipe = async ()=>{
    let response  = await fetch(URL)
    let data = await response.json()
    setRecipe(data.hits)
    //console.log(data)
    return ;
  }
  useEffect(()=>{
    getRecipe()
  },[getRecipe])

  return (
    
    <div className="search-from">
      <Form inline className="mb-3">
      <Input type="text"  className="mr-2" onChange={()=>setRecipe()}/>
      <Button  type="submit"className="button"> Search</Button>
    </Form>
    <Row>
      
      {
      recipes.map(recipe=>
        <Recipe recipie recipe={recipe}/>
        )
      }
    </Row>
    
    </div>
    
  );
}
export default RecipesContainer

