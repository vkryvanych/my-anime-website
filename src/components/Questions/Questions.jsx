import './Questions.css';

function Questions() {
  const genres = [
    { value: 'action', emoji: '⚔️', text: 'Екшн' },
    { value: 'comedy', emoji: '😂', text: 'Комедія' },
    { value: 'romance', emoji: '💖', text: 'Романтика' },
    { value: 'fantasy', emoji: '✨', text: 'Фентезі' }
  ];

  return (
    <div className="question active">
      <h3>Який жанр ви найбільше любите?</h3>
      <div className="options-grid">
        {genres.map(genre => (
          <label key={genre.value} className="option-card">
            <input 
              type="radio" 
              name="genre" 
              value={genre.value}
            />
            <div className="option-content">
              <span className="option-emoji">{genre.emoji}</span>
              <span className="option-text">{genre.text}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Questions;