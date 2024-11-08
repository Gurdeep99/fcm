// src/app/components/CricketScoreForm.js
'use client';

import { useState } from 'react';

const CricketScoreForm = () => {
  const [team1, setTeam1] = useState({
    teamName: '',
    teamLogo: '',
    teamScore: '',
    teamWicket: '',
    teamOver: ''
  });
  const [team2, setTeam2] = useState({
    teamName: '',
    teamLogo: '',
    teamScore: '',
    teamWicket: '',
    teamOver: ''
  });

  const handleChange = (e, team) => {
    const { name, value } = e.target;
    if (team === 'team1') {
      setTeam1((prev) => ({ ...prev, [name]: value }));
    } else {
      setTeam2((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (team, data) => {
    try {
      const response = await fetch('/api/cricket/score/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          team: team,
          teamName: data.teamName,
          teamLogo: data.teamLogo,
          teamScore: data.teamScore,
          teamWicket: data.teamWicket,
          teamOver: data.teamOver
        })
      });
      if (response.ok) {
        alert(`Team ${team} data updated successfully!`);
      } else {
        alert('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="scoreboard-container">
      <div className="team-form">
        <h3>Team 1</h3>
        <input
          type="text"
          name="teamName"
          placeholder="Team Name"
          value={team1.teamName}
          onChange={(e) => handleChange(e, 'team1')}
        />
        <input
          type="text"
          name="teamLogo"
          placeholder="Team Logo URL"
          value={team1.teamLogo}
          onChange={(e) => handleChange(e, 'team1')}
        />
        <input
          type="number"
          name="teamScore"
          placeholder="Team Score"
          value={team1.teamScore}
          onChange={(e) => handleChange(e, 'team1')}
        />
        <input
          type="number"
          name="teamWicket"
          placeholder="Team Wickets"
          value={team1.teamWicket}
          onChange={(e) => handleChange(e, 'team1')}
        />
        <input
          type="number"
          name="teamOver"
          placeholder="Team Overs"
          value={team1.teamOver}
          onChange={(e) => handleChange(e, 'team1')}
        />
        <button onClick={() => handleSubmit(1, team1)}>Submit Team 1</button>
      </div>

      <div className="team-form">
        <h3>Team 2</h3>
        <input
          type="text"
          name="teamName"
          placeholder="Team Name"
          value={team2.teamName}
          onChange={(e) => handleChange(e, 'team2')}
        />
        <input
          type="text"
          name="teamLogo"
          placeholder="Team Logo URL"
          value={team2.teamLogo}
          onChange={(e) => handleChange(e, 'team2')}
        />
        <input
          type="number"
          name="teamScore"
          placeholder="Team Score"
          value={team2.teamScore}
          onChange={(e) => handleChange(e, 'team2')}
        />
        <input
          type="number"
          name="teamWicket"
          placeholder="Team Wickets"
          value={team2.teamWicket}
          onChange={(e) => handleChange(e, 'team2')}
        />
        <input
          type="number"
          name="teamOver"
          placeholder="Team Overs"
          value={team2.teamOver}
          onChange={(e) => handleChange(e, 'team2')}
        />
        <button onClick={() => handleSubmit(2, team2)}>Submit Team 2</button>
      </div>
    </div>
  );
};

export default CricketScoreForm;
