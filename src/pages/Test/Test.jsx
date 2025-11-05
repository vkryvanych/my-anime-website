import './Test.css';
import Questions from '../../components/Questions/Questions';
import GetRecButton from '../../components/Buttons/GetRecButton/GetRecButton';

function Test() {
  return (
    <div className="test-page">
    
      
      <div className="test-section">     
        <div className="container">
          <h2 className="section-title">Знайдемо ідеальне аніме для вас!</h2>

          <form id="anime-test-form">
            <Questions />
            
            <div className="navigation-buttons">
              <GetRecButton />
            </div>
          </form>
        </div>
      </div>

     
    </div>
  );
}

export default Test;