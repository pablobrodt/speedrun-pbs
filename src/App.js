import { useState, useEffect } from 'react'

import { Game } from './ui'
import { speedrunService } from './services'

import './App.css'

function App() {
  const [personalBests, setPersonalBests] = useState([])

  useEffect(() => {
    getPersonalBests()
  }, [])

  async function getPersonalBests() {
    const pbs = await speedrunService.getPersonalBests('863m3p38')

    setPersonalBests(pbs)
  }

  function renderPersonalBest(pb, index) {
    const { game, category } = pb
    const gameImage = game?.assets['cover-medium']?.uri

    return (
      <Game
        key={index}
        name={game.name}
        category={category.name}
        url={game.link}
        image={gameImage}
      />
    )
  }

  function renderPersonalBests() {
    return (
      <div className='pbs'>
        {personalBests.map((pb, index) => renderPersonalBest(pb, index))}
      </div>
    )
  }

  return (
    <div>
      {renderPersonalBests()}
    </div>
  );
}

export default App;
