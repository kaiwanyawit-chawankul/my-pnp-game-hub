import React, { useState } from 'react';
import gamesData from './data/games.json';
import './App.css';

export default function App() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeGame, setActiveGame] = useState(null);

  // Extract all unique tags dynamically from your games list
  const allTags = ['All', ...new Set(gamesData.flatMap(game => game.tags))];

  // Filter games based on the selected tag
  const filteredGames = selectedTag === 'All'
    ? gamesData
    : gamesData.filter(game => game.tags.includes(selectedTag));

  return (
    <div className="hub-container">
      <header className="hub-header">
        <h1>🎲 PnP Micro-Game Hub</h1>
        <p>Print-and-play and browser-ready 9-card games.</p>
      </header>

      {/* Tag Filter Bar */}
      <nav className="tag-bar">
        {allTags.map(tag => (
          <button
            key={tag}
            className={`tag-btn ${selectedTag === tag ? 'active' : ''}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </nav>

      {/* Game Grid */}
      <main className="game-grid">
        {filteredGames.map(game => (
          <div key={game.id} className="game-card" onClick={() => setActiveGame(game)}>
            <img src={game.thumbnail} alt={game.title} className="game-thumb" />
            <div className="game-info">
              <h3>{game.title}</h3>
              <p className="tagline">{game.tagline}</p>
              <div className="game-meta">
                <span>👥 {game.playerCount}</span>
                <span>⏱️ {game.playTime}</span>
              </div>
              <div className="card-tags">
                {game.tags.map(t => <span key={t} className="badge">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Game Details / Download Modal */}
      {activeGame && (
        <div className="modal-overlay" onClick={() => setActiveGame(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveGame(null)}>×</button>
            <h2>{activeGame.title}</h2>
            <p>{activeGame.tagline}</p>

            <div className="modal-actions">
              <a href={activeGame.downloads.printAndPlayPDF} className="btn primary" target="_blank" rel="noopener noreferrer">
                📥 Download PnP Sheet (PDF)
              </a>
              <a href={activeGame.downloads.rulebook} className="btn secondary" target="_blank" rel="noopener noreferrer">
                📖 Read Rulebook
              </a>
              {activeGame.playableInBrowser && (
                <button className="btn play" onClick={() => alert('Launch browser game route here!')}>
                  🚀 Play in Browser
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}