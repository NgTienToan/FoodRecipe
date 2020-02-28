import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import Recipe from './components/Recipe'

function App() {

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "a9e97685";
  const APP_KEY = "9709c0401aa79a15eb622257a4358c0b";

  const onInputChange = e => {
    console.log(e.target.value);
    setSearch(e.target.value)
    
  }
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} />
      <Recipe />
    </div>
  );
}

export default App;
