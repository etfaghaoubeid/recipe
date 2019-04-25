import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import "./assets/scss/main.scss"

import Main from './components/laytouts/Main';
import RecipesContainer from "./components/Recipe/Recipes.Container"

function App() {
  return (
    <Main>
      <RecipesContainer/>
    </Main>
  );
}

export default App;
