import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import logo from '../assets/images/logo.png'; // Assuming you have a logo image

const CharacterSheet = ({ character }) => {
  const componentRef = useRef(); // Ref to the component content to be printed

  // Function to handle printing/PDF generation
    const generateCharacter = () => {
      alert('Generating Character......click ok to Print!');
      generatePrintout(character);
      console.log('Character:', character);
    };
 

 
// Generate printout of character build
  // This function creates a printout of the character build based on the answers provided by the user.

  const generatePrintout = (character) => {

  
    const characterDetails = `
        
        <img class="logo" src="${logo}" alt="Cindervoid Logo" />
        
          <h3>Name: ${character.name}</h3>

            <h4>Bloodline: ${character.bloodline.name}</h4>
            <div class="bloodline-details">
              <img src=${character.bloodline.photo} alt={character.bloodline.name} class="detail-photo" />
                            <p>${character.bloodline.description}</p>

              <p><strong>Boon:</strong> ${character.bloodline.boon}</p>
              <p><strong>Drawback:</strong> ${character.bloodline.drawback}</p>
              <p><strong>Root Ability:</strong> ${character.bloodline.rootAbility}</p>
            <p><strong>Essence Level:</strong> ${character.bloodline.essenceLevel}</p>
            <p><strong>HP Bonus:</strong> ${character.bloodline.hpBonus}</p>
            <p><strong>Starting Jinx:</strong> ${character.bloodline.startingJinx}</p>
            <p><strong>Attack Prowess:</strong> ${character.bloodline.attackProwess}</p>
            <p><strong>Defense Prowess:</strong> ${character.bloodline.defenseProwess}</p>
            <p><strong>Average Height:</strong> ${character.bloodline.avgHeight} ft</p>
            <p><strong>Average Life:</strong> ${character.bloodline.avgLife} years</p>
            </div>
       

            <h4>Essence: ${character.essence.name}</h4>
             <p>${character.essence.motto}</p>
            <p><strong>Advantage:</strong> ${character.essence.advantage}</p>
            <p><strong>Starting Package:</strong> ${character.essence.startingPackage.join(', ')}</p>
            <p><strong>Weapon:</strong> ${character.essence.weapon}</p>
           


        <h4>Spark Path: ${character.sparkPath.name} (${character.sparkPath.desc})</h4>

        <h4>Base Stats:</h4>
        <ul class="stat-list">
          <li><strong>Might:</strong> ${character.stats.might}</li>
          <li><strong>Celerity:</strong> ${character.stats.celerity}</li>
          <li><strong>Resilience:</strong> ${character.stats.resilience}</li>
          <li><strong>Cognition:</strong> ${character.stats.cognition}</li>
          <li><strong>Aura:</strong> ${character.stats.aura}</li>
        </ul>
        <h5>Don't forget to add your Bonus Stats!</h5>
      </div>
    </div>
   
        `;
  
    const printElement = document.createElement('div');
    printElement.innerHTML = `
        <html>
        <title>Cindervoid Character Builder</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bellefair&family=MedievalSharp&display=swap" rel="stylesheet">
        <style>
          .logo {
            width: 100%;
            max-width: 400px;
            height: auto;
            
              position: absolute;
              z-index: 1;
              top: 0;
            right: 0;
          }

          /* General Body Styles */
body {
  margin: 0;
  font-family: 'Inter', sans-serif; /* Using Inter as per instructions */
  background-color: #f4f7f6;
  color: #333;
  line-height: 1.6;
  max-width: 800px;
}

/* Main App Container */
.app-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Header Styles */
.app-header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #e0e0e0;
}

.app-header h1 {
  color: #2c3e50;
  font-size: 2.5em;
  margin: 0;
  letter-spacing: 1px;
}

/* Main Content Layout */
.app-main {
  display: flex;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
  gap: 40px;
  justify-content: center;
}

/* Form and Sheet Sections */
.character-form-section,
.character-sheet-section {
  flex: 1; /* Allows sections to grow and shrink */
  min-width: 300px; /* Minimum width before wrapping */
  background-color: #fdfdfd;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #e0e0e0;
}

.character-form-section h2,
.character-sheet-section h2 {
  color: #34495e;
  margin-top: 0;
  margin-bottom: 25px;
  font-size: 1.8em;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

/* Form Group Styling */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

.bloodline-details img {
width: 100%;
  max-width: 300px; /* Limit image size */
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-left: 20px;
  }

.form-group input[type="text"],
.form-group select {
  width: calc(100% - 20px); /* Account for padding */
  padding: 12px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1em;
  box-sizing: border-box; /* Include padding in width */
  transition: border-color 0.3s ease;
}

.form-group input[type="text"]:focus,
.form-group select:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}

/* Selected Detail Display (Bloodline/Essence) */
.selected-detail {
  margin-top: 15px;
  padding: 15px;
  background-color: #eaf6fd;
  border: 1px solid #c9e6f9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h5 {
  text-align: center;
  margin: auto;
  color: #f10f0f;
  
  font-style: italic;
}

.selected-detail h3 {
  color: #2980b9;
  margin-top: 10px;
  margin-bottom: 5px;
}

.selected-detail p {
  font-size: 0.95em;
  color: #444;
  margin-bottom: 5px;
}

.detail-photo {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Stat Allocator */
.stat-allocator-section {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.stat-allocator-section h3 {
  color: #34495e;
  margin-bottom: 15px;
  font-size: 1.5em;
}

.points-remaining {
  font-weight: bold;
  color: #e74c3c;
}

.stat-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: #f8f8f8;
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #e9e9e9;
}

.stat-name {
  font-weight: bold;
  flex: 1;
}

.stat-value {
  font-weight: bold;
  font-size: 1.1em;
  color: #2c3e50;
  width: 30px; /* Fixed width for value */
  text-align: center;
}

.stat-buttons {
  display: flex;
  gap: 5px;
}

.stat-buttons button {
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 50%; /* Circular buttons */
  width: 30px;
  height: 30px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-buttons button:hover:not(:disabled) {
  background-color: #2980b9;
  transform: scale(1.05);
}

.stat-buttons button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

/* Character Sheet Preview */
.character-sheet-content {
  padding: 20px;
  
  border-radius: 10px;
  background-color: #fdfdfd;
  min-height: 400px; /* Ensure it has some height */
}

.character-sheet-content h3,
.character-sheet-content h4 {
  color: #34495e;
  margin-bottom: 10px;
  border-bottom: 1px dashed #eee;
  padding-bottom: 5px;
}

.character-sheet-content p {
  margin-bottom: 8px;
  font-size: 0.95em;
}

.bloodline-details {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
    gap: 20px;
}

.bloodline-details img {
  margin-bottom: 10px;
}

.stat-list {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

.stat-list li {
  background-color: #f0f8ff;
  padding: 8px 15px;
  border-radius: 6px;
  margin-bottom: 5px;
  border: 1px solid #d0e8ff;
  display: flex;
  justify-content: space-between;
}

.stat-list li strong {
  color: #2980b9;
}




/* Responsive Adjustments */
@media (max-width: 768px) {
  .app-main {
    flex-direction: column;
    gap: 20px;
  }

  .character-form-section,
  .character-sheet-section {
    min-width: unset; /* Remove min-width on small screens */
    width: 100%;
  }

  .app-container {
    padding: 10px;
    margin: 10px auto;
  }

  .app-header h1 {
    font-size: 1.8em;
  }
}

        </style>
            </head>
            <body>
            
 
            

                              
            
                ${characterDetails}
            
                
            </body>
        </html>
    `;
  
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printElement.innerHTML);
    printWindow.document.close();
    printWindow.focus();
  
    setTimeout(() => {
        printWindow.print();
    }, 500);
  };

  return (
    <div className="character-sheet-section">
      <h2>Character Preview</h2>
      <div className="character-sheet-content" ref={componentRef}>
        {/* Ensure there's always some content, even if character is empty */}
        {character.name ? (
          <h3>Name: {character.name}</h3>
        ) : (
          <h3>Name: N/A (Please enter a name)</h3>
        )}

        {character.bloodline ? (
          <>
            <h4>Bloodline: {character.bloodline.name}</h4>
            <div className="bloodline-details">
              <img src={character.bloodline.photo} alt={character.bloodline.name} className="detail-photo" />
                            <p>{character.bloodline.description}</p>

              <p><strong>Boon:</strong> {character.bloodline.boon}</p>
              <p><strong>Drawback:</strong> {character.bloodline.drawback}</p>
              <p><strong>Root Ability:</strong> {character.bloodline.rootAbility}</p>
            <p><strong>Essence Level:</strong> {character.bloodline.essenceLevel}</p>
            <p><strong>HP Bonus:</strong> {character.bloodline.hpBonus}</p>
            <p><strong>Starting Jinx:</strong> {character.bloodline.startingJinx}</p>
            <p><strong>Attack Prowess:</strong> {character.bloodline.attackProwess}</p>
            <p><strong>Defense Prowess:</strong> {character.bloodline.defenseProwess}</p>
            <p><strong>Average Height:</strong> {character.bloodline.avgHeight} ft</p>
            <p><strong>Average Life:</strong> {character.bloodline.avgLife} years</p> 
            </div>
          </>
        ) : (
          <p>No Bloodline selected.</p>
        )}

        {character.essence ? (
          <>
            <h4>Essence: {character.essence.name}</h4>
             <p>{character.essence.motto}</p>
            <p><strong>Advantage:</strong> {character.essence.advantage}</p>
            <p><strong>Starting Package:</strong> {character.essence.startingPackage.join(', ')}</p>
            <p><strong>Weapon:</strong> {character.essence.weapon}</p>
           
          </>
        ) : (
          <p>No Essence selected.</p>
        )}

        {character.sparkPath ? (
          <h4>Spark Path: {character.sparkPath.name} ({character.sparkPath.desc})</h4>
        ) : (
          <p>No Spark Path selected.</p>
        )}

        <h4>Base Stats:</h4>
        <ul className="stat-list">
          <li><strong>Might:</strong> {character.stats.might}</li>
          <li><strong>Celerity:</strong> {character.stats.celerity}</li>
          <li><strong>Resilience:</strong> {character.stats.resilience}</li>
          <li><strong>Cognition:</strong> {character.stats.cognition}</li>
          <li><strong>Aura:</strong> {character.stats.aura}</li>
        </ul>
        <h5>Don't forget to add your Bonus Stats!</h5>
      </div>
      <button onClick={generateCharacter} className="save-pdf-button">
        Print to PDF
      </button>
    </div>
  );
};

export default CharacterSheet;
