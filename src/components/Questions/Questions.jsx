import './Questions.css';

function Questions({ selectedGenre, onGenreChange }) {
  return (
    <div className="questions-container">
      <div className="question active">
        <h3>Який жанр ви найбільше любите?</h3>
        <div className="options-grid">
          <label className="option-card">
            <input 
              type="radio" 
              name="genre" 
              value="action" 
              checked={selectedGenre === 'action'}
              onChange={(e) => onGenreChange(e.target.value)}
            />
            <div className="option-content">
              <span className="option-emoji">⚔️</span>
              <span className="option-text">Екшн</span>
            </div>
          </label>
          
          <label className="option-card">
            <input 
              type="radio" 
              name="genre" 
              value="detective" 
              checked={selectedGenre === 'detective'}
              onChange={(e) => onGenreChange(e.target.value)}
            />
            <div className="option-content">
              <span className="option-emoji">🔍</span>
              <span className="option-text">Детектив</span>
            </div>
          </label>
          
          <label className="option-card">
            <input 
              type="radio" 
              name="genre" 
              value="romance" 
              checked={selectedGenre === 'romance'}
              onChange={(e) => onGenreChange(e.target.value)}
            />
            <div className="option-content">
              <span className="option-emoji">💖</span>
              <span className="option-text">Романтика</span>
            </div>
          </label>
          
          <label className="option-card">
            <input 
              type="radio" 
              name="genre" 
              value="fantasy" 
              checked={selectedGenre === 'fantasy'}
              onChange={(e) => onGenreChange(e.target.value)}
            />
            <div className="option-content">
              <span className="option-emoji">✨</span>
              <span className="option-text">Фентезі</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Questions;