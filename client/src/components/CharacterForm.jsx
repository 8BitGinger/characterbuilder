import React from 'react';
import StatAllocator from './StatAllocator';

// Import data with plural names for clarity and correctness
import bloodlinesData from '../data/bloodlines.js';
import essencesData from '../data/essences.js';
import sparkPathsData from '../data/sparks.js';

const CharacterForm = ({ character, setCharacter, pointsRemaining, setPointsRemaining }) => {

  // Handle input changes for text fields (like character name)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCharacter(prevChar => ({ ...prevChar, [name]: value }));
  };

  // Handle change for Bloodline dropdown
  const handleBloodlineChange = (e) => {
    const selectedBloodline = bloodlinesData.find(b => b.id === e.target.value);
    setCharacter(prevChar => ({ ...prevChar, bloodline: selectedBloodline }));
  };

  // Handle change for Essence dropdown
  const handleEssenceChange = (e) => {
    const selectedEssence = essencesData.find(eData => eData.id === e.target.value);
    setCharacter(prevChar => ({ ...prevChar, essence: selectedEssence }));
  };

  // Handle change for Spark Path dropdown
  const handleSparkPathChange = (e) => {
    const selectedSparkPath = sparkPathsData.find(s => s.id === e.target.value);
    setCharacter(prevChar => ({ ...prevChar, sparkPath: selectedSparkPath }));
  };

  // Handle stat point allocation changes
  const handleStatChange = (statName, value) => {
    const oldStatValue = character.stats[statName];
    const newPointsUsed = value - oldStatValue;

    // Ensure points don't go below zero and total points don't exceed 15
    if (pointsRemaining - newPointsUsed >= 0 && value >= 0) {
      setCharacter(prevChar => ({
        ...prevChar,
        stats: {
          ...prevChar.stats,
          [statName]: value,
        },
      }));
      setPointsRemaining(prev => prev - newPointsUsed);
    }
  };

  return (
    <div className="character-form-section">
      <h2>Character Creator</h2>
      <div className="form-group">
        <label htmlFor="characterName">Character Name:</label>
        <input
          type="text"
          id="characterName"
          name="name"
          value={character.name}
          onChange={handleInputChange}
          placeholder="Enter character name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="bloodline">Bloodline:</label>
        <select
          id="bloodline"
          name="bloodline"
          value={character.bloodline ? character.bloodline.id : ''}
          onChange={handleBloodlineChange}
        >
          <option value="">Select Bloodline</option>
          {bloodlinesData.map(bloodline => (
            <option key={bloodline.id} value={bloodline.id}>
              {bloodline.name}
            </option>
          ))}
        </select>
        {character.bloodline && (
          <div className="selected-detail">
            {/* <img src={character.bloodline.photo} alt={character.bloodline.name} className="detail-photo" /> */}
            <h3>{character.bloodline.name}</h3>
            <p>{character.bloodline.description}</p>
            {/* <p><strong>Boon:</strong> {character.bloodline.boon}</p>
            <p><strong>Drawback:</strong> {character.bloodline.drawback}</p>
            <p><strong>Root Ability:</strong> {character.bloodline.rootAbility}</p>
            <p><strong>Essence Level:</strong> {character.bloodline.essenceLevel}</p>
            <p><strong>HP Bonus:</strong> {character.bloodline.hpBonus}</p>
            <p><strong>Starting Jinx:</strong> {character.bloodline.startingJinx}</p>
            <p><strong>Attack Prowess:</strong> {character.bloodline.attackProwess}</p>
            <p><strong>Defense Prowess:</strong> {character.bloodline.defenseProwess}</p>
            <p><strong>Average Height:</strong> {character.bloodline.avgHeight} ft</p>
            <p><strong>Average Life:</strong> {character.bloodline.avgLife} years</p>  */}
          </div>
        )}
      </div>



      <div className="form-group">
        <label htmlFor="essence">Essence:</label>
        <select
          id="essence"
          name="essence"
          value={character.essence ? character.essence.id : ''}
          onChange={handleEssenceChange}
        >
          <option value="">Select Essence</option>
          {essencesData.map(essence => (
            <option key={essence.id} value={essence.id}>
              {essence.name}
            </option>
          ))}
        </select>
        {character.essence && (
          <div className="selected-detail">
            <h3>{character.essence.name}</h3>
            <p>{character.essence.motto}</p>
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="sparkPath">Spark Path:</label>
        <select
          id="sparkPath"
          name="sparkPath"
          value={character.sparkPath ? character.sparkPath.id : ''}
          onChange={handleSparkPathChange}
        >
          <option value=''>Select Spark Path</option>
          {sparkPathsData.map(spark => (
            <option key={spark.id} value={spark.id}>
              {spark.name}
            </option>
          ))}
        </select>
         {character.sparkPath && (
          <div className="selected-detail">
            <p>{character.sparkPath.tag}</p>
          </div>
        )}
      </div>

      <StatAllocator
        stats={character.stats}
        pointsRemaining={pointsRemaining}
        onStatChange={handleStatChange}
      />
    </div>
  );
}

export default CharacterForm;
