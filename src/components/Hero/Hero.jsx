import './Hero.css';
import GetRecButton from '../Buttons/GetRecButton/GetRecButton';

function Hero() {
    return (
        <div className="getRec">
            <div className="container">
                <h1 className="header-text">Знайдіть ідеальне аніме для себе</h1>
                <p>Наша система рекомендацій допоможе вам відкрити нові аніме, які точно відповідають вашим вподобанням</p>
                <GetRecButton />
            </div>
        </div>
    );
}

export default Hero;