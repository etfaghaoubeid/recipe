import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import "./assets/scss/main.scss"

import {Route} from "react-router-dom"

import Main from './components/laytouts/Main';
import RecipesContainer from "./components/Recipe/Recipes.Container"
import About from './components/about/About';
import Details from './components/Recipe/Details';

function App() {
  return (
    <Main>
      <Route exact path="/" component={RecipesContainer}/>
      <Route path="/details/:id" component={Details}/>

      <Route path="/about" component={About}/>
    </Main>
  );
}

export default App;
