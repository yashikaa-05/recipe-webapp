
import './App.css';

import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,

} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RecipeListPage from './pages/RecipeListPage';
import SavedRecipesPage from './pages/SavedRecipesPage';

import SavedRecipesDetail from './components/SavedRecipesDetail';
import CollectionsDetail from './components/CollectionsDetail';

import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import DisplayRecipe from './components/DisplayRecipe';


function App() {
  const [stateDataIntolerances, setStateDataIntolerances] = useState("");
  const [stateDataDiet, setStateDataDiet] = useState("");

  const pull_data = (data) => {
    setStateDataIntolerances(data);
  }

  const pull_data2 = (data2) => {
    setStateDataDiet(data2);
  }

  return (
    <main className="App">
      <Header />

      <Routes>
        <Route path='/' element={<LandingPage func={pull_data} func2={pull_data2} />} />
        <Route path='login' element={<LoginForm />} />
        <Route path='register' element={<RegisterForm />} />
        <Route path='collections' element={<SavedRecipesPage />} />
        <Route path='collections/:id' element={<SavedRecipesDetail />} />
        <Route path='collections/detail' element={<CollectionsDetail />} />



        <Route path='recipes' element={<RecipeListPage intolerances={stateDataIntolerances} diet={stateDataDiet} />} />
        <Route path='show/:id' element={<DisplayRecipe />} />

  
        <Route path='detail' element={<SavedRecipesDetail />} />

        <Route element={Error} />
       
      </Routes>
      
      <Footer/>
    </main>
  );
}

export default App;
