// src/app/components/CricketScoreDisplay.js
'use client';

import { useEffect, useState } from 'react';

const CricketScoreDisplay = () => {
  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch('/api/cricket/score/fetch');
        const data = await response.json();
        setScoreData(data);
      } catch (error) {
        console.error('Error fetching score data:', error);
      }
    };

    fetchScores();
  }, []);

  if (!scoreData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="scoreboard">
      <h2>{scoreData.home[0].title}</h2>
      <h3>{scoreData.home[0].match_status}</h3>
      <div className="marque">{scoreData.home[0].marque}</div>
      <div className="game_date">{scoreData.home[0].game_date}</div>
      <div className="team-scores">
        {scoreData.home[0].data.map((team) => (
          <div key={team.id} className="team">
            <h4>{team.title}</h4>
            <img src={team.image} alt={team.title} />
            <p>Score: {team.score}</p>
            <p>Wickets: {team.wicket}</p>
            <p>Overs: {team.over}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CricketScoreDisplay;
