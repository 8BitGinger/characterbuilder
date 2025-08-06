import React, { useState } from 'react';
import CharacterForm from './components/CharacterForm';
import CharacterSheet from './components/CharacterSheet';
import './App.css'; // Import the main CSS file

const App = () => {
  // State to hold all character data
  const [character, setCharacter] = useState({
    name: '',
    bloodline: null,
    essence: null,
    sparkPath: null,
    stats: {
      might: 0,
      celerity: 0,
      resilience: 0,
      cognition: 0,
      aura: 0,
    },
  });

  // State for remaining stat points
  const [pointsRemaining, setPointsRemaining] = useState(15);

  // Callback function to update character state from CharacterForm
  const updateCharacter = (newCharacterData) => {
    setCharacter(newCharacterData);
  };

  // Callback function to update points remaining from StatAllocator
  const updatePointsRemaining = (newPoints) => {
    setPointsRemaining(newPoints);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>TTRPG Character Creator</h1>
      </header>
      <main className="app-main">
        <CharacterForm
          character={character}
          setCharacter={updateCharacter}
          pointsRemaining={pointsRemaining}
          setPointsRemaining={updatePointsRemaining}
        />
        <CharacterSheet character={character} />
      </main>
    </div>
  );
};

export default App;
