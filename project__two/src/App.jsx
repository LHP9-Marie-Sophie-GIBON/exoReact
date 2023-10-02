import { useState } from 'react'
import Card from './components/card'
import pokedex from './components/pokedex'
import './App.css'

function App() {
  const pokemons = pokedex.map(pokemon => {
    return <Card
      key={pokemon.id}
      {...pokemon}
    />
  })
  return (
    <>
      {pokemons}
    </>
  )
}

export default App

