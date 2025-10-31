import './Test.css';
import Questions from '../../components/Questions/Questions';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GetRecButton from '../../components/Buttons/GetRecButton/GetRecButton';

function Test() {
  return (
    <div className="test-page">
      <Header showBackButton={true} />
      
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

      <Footer showAuthButtons={true} showContactLink={true} />
    </div>
  );
}

export default Test;