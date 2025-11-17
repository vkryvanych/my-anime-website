import { useState } from 'react';
import './Test.css';
import Questions from '../../components/Questions/Questions';
import SubmitTestButton from '../../components/Buttons/SubmitTestButton/SubmitTestButton';
import Results from '../../components/Results/Results';
import { useAnimeData } from '../../hooks/useAnimeData';

function Test() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const { getAnimeByGenre, error } = useAnimeData();

  const getRecommendations = () => {
    if (!selectedGenre) {
      alert('Будь ласка, оберіть варіант відповіді');
      return;
    }

    const recommendations = getAnimeByGenre(selectedGenre);

    if (recommendations.length > 0) {
      const randomAnime = recommendations[Math.floor(Math.random() * recommendations.length)];
      setRecommendation(randomAnime);
      setShowResults(true);
    }
  };

  const restartTest = () => {
    setShowResults(false);
    setSelectedGenre('');
    setRecommendation(null);
  };

  return (
    <div className="test-page">
      <div className="test-section">
        <div className="container">
          <h2 className="section-title">Знайдемо ідеальне аніме для вас!</h2>

          {error && <div className="error-message">{error}</div>}

          {!showResults ? (
            <div className="test-content">
              <Questions
                selectedGenre={selectedGenre}
                onGenreChange={setSelectedGenre}
              />

              <div className="navigation-buttons">
                <SubmitTestButton
                  onClick={getRecommendations}
                  disabled={!selectedGenre}
                />
              </div>
            </div>
          ) : (
            <Results
              anime={recommendation.title}
              description={recommendation.description}
              image={recommendation.image}
              onRestart={restartTest}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Test;