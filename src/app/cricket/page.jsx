"use client";
import { useState } from 'react';
import axios from 'axios';

const CricketScore = () => {
  const [team1, setTeam1] = useState({
    title: 'CSK',
    image: 'https://img.freepik.com/free-vector/round-flag-india_23-2147813736.jpg',
    score: '210',
    wicket: '4',
    over: '20'
  });

  const [team2, setTeam2] = useState({
    title: 'MI',
    image: 'https://img.freepik.com/free-vector/round-flag-india_23-2147813736.jpg',
    score: '190',
    wicket: '6',
    over: '20'
  });

  const handleInputChange = (e, team, field) => {
    const updatedTeam = { ...team, [field]: e.target.value };
    team === team1 ? setTeam1(updatedTeam) : setTeam2(updatedTeam);
  };

  const updateField = async (teamName, field, value) => {
    try {
      const response = await axios.post('/api/auw/cricket', {
        team: teamName,
        field,
        value,
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error updating field:', error);
    }
  };

  return (
    <div style={styles.container}>
      {/* Team 1 */}
      <div style={styles.teamContainer}>
        {/* Team Name Input */}
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            value={team1.title}
            onChange={(e) => handleInputChange(e, team1, 'title')}
            placeholder="Team Name"
          />
          <button style={styles.button} onClick={() => updateField('team1', 'title', team1.title)}>Update Name</button>
        </div>

        {/* Image URL Input */}
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            value={team1.image}
            onChange={(e) => handleInputChange(e, team1, 'image')}
            placeholder="Image URL"
          />
          <button style={styles.button} onClick={() => updateField('team1', 'image', team1.image)}>Update Image</button>
        </div>

        {/* Score Input */}
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            value={team1.score}
            onChange={(e) => handleInputChange(e, team1, 'score')}
            placeholder="Score"
          />
          <button style={styles.button} onClick={() => updateField('team1', 'score', team1.score)}>Update Score</button>
        </div>

        {/* Wickets Input */}
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            value={team1.wicket}
            onChange={(e) => handleInputChange(e, team1, 'wicket')}
            placeholder="Wickets"
          />
          <button style={styles.button} onClick={() => updateField('team1', 'wicket', team1.wicket)}>Update Wickets</button>
        </div>

        {/* Overs Input */}
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            value={team1.over}
            onChange={(e) => handleInputChange(e, team1, 'over')}
            placeholder="Overs"
          />
          <button style={styles.button} onClick={() => updateField('team1', 'over', team1.over)}>Update Overs</button>
        </div>
      </div>

      {/* Team 2 */}
      <div style={styles.teamContainer}>
        {/* Team Name Input */}
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            value={team2.title}
            onChange={(e) => handleInputChange(e, team2, 'title')}
            placeholder="Team Name"
          />
          <button style={styles.button} onClick={() => updateField('team2', 'title', team2.title)}>Update Name</button>
        </div>

        {/* Image URL Input */}
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            value={team2.image}
            onChange={(e) => handleInputChange(e, team2, 'image')}
            placeholder="Image URL"
          />
          <button style={styles.button} onClick={() => updateField('team2', 'image', team2.image)}>Update Image</button>
        </div>

        {/* Score Input */}
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            value={team2.score}
            onChange={(e) => handleInputChange(e, team2, 'score')}
            placeholder="Score"
          />
          <button style={styles.button} onClick={() => updateField('team2', 'score', team2.score)}>Update Score</button>
        </div>

        {/* Wickets Input */}
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            value={team2.wicket}
            onChange={(e) => handleInputChange(e, team2, 'wicket')}
            placeholder="Wickets"
          />
          <button style={styles.button} onClick={() => updateField('team2', 'wicket', team2.wicket)}>Update Wickets</button>
        </div>

        {/* Overs Input */}
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            value={team2.over}
            onChange={(e) => handleInputChange(e, team2, 'over')}
            placeholder="Overs"
          />
          <button style={styles.button} onClick={() => updateField('team2', 'over', team2.over)}>Update Overs</button>
        </div>
      </div>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100vw',
    height: '100vh',
    padding: '20px',
    backgroundColor: '#f4f4f9',
  },
  teamContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    margin: '10px',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  },
  input: {
    marginRight: '10px',
    padding: '10px',
    width: '150px',
    fontSize: '1rem',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default CricketScore;
