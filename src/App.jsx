import { useEffect, useState } from 'react'
import Form from './components/Form';
import List from './components/List';
import ListLocal from './components/ListLocal';
import './App.css'

function App() {
  const API01 = "https://pokeapi.co/api/v2/pokemon/";

  const [dataPoke, setDataPoke] = useState({})
  const [activeNacional, setActiveNacional] = useState(true);

  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('formData')) || []); 

  async function callApi() {
    const response = await fetch(API01);
    const data = await response.json();
    setDataPoke(data)
  }

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <h2>PokeApi</h2>
      <div>
        <button onClick={()=>setActiveNacional(true)}>Pokedex Nacional</button>
        <button onClick={()=>setActiveNacional(false)}>Pokedex Tumbo</button>
      </div>

      { activeNacional? <List data={dataPoke} /> : <ListLocal data={formData}/> }
    </>
  )
}

export default App
