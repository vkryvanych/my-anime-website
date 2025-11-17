import './Results.css';

function Results({ anime, description, image, onRestart }) {
  return (
    <div className="results-container">
      <div className="results-content">
        
        <div className="recommendation-section">
          <h2>Ось що ми знайшли для вас:</h2>
          
          <div className="anime-recommendation">
            <div className="anime-layout">
              {image && (
                <div className="anime-image">
                  <img src={image} alt={anime} />
                </div>
              )}
              <div className="anime-info">
                 <h3 className="anime-title">{anime}</h3>
                <p className="anime-description">{description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button onClick={onRestart} className="action-button">
            Пройти тест знову
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;