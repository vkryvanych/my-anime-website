import { useLocation, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RegisterButton from '../../components/Buttons/RegisterButton/RegisterButton';
import LoginButton from '../../components/Buttons/LoginButton/LoginButton';
import './Auth.css';

function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === '/auth/login' || location.pathname === '/auth';
  
  return (
    <div className="auth-container">
      <Header showBackButton={true} />
      
      <div className="auth-page">
        <div className="auth-background">
          {isLogin ? (
            <>
              <img src="/public/photo_2025-10-07_23-11-17-removebg-preview.png" alt="Anime girl" className="decoration deco-1" />
              <img src="/public/429-4292752_tumblr-art-anime-neko-nekogirl-sticker-stickers-neko-removebg-preview.png" alt="Neko girl" className="decoration deco-2" />
            </>
          ) : (
            <>
              <img src="/public/kawaii-pixel-art-heart-cuteness-drawing-video-games-pixelation-pink-magenta-png-clipart-thumbnail-removebg-preview.png" alt="Cute Hearts" className="decoration deco-3" />
              <img src="/public/331-3316019_chibi-anime-santa-pink-red-sticker-cute-use-removebg-preview.png" alt="Santa girl" className="decoration deco-4" />
            </>
          )}
        </div>
        
        <div className="auth-form-container">
          {isLogin ? (
            <div className="login-form">
              <h2 className="auth-title">Увійти</h2>
              <form>
                <div className="input-with-icon">
                  <input type="text" placeholder="Username" />
                  <img src="/public/user.png" alt="Username" className="input-icon" />
                </div>
                <div className="input-with-icon">
                  <input type="password" placeholder="Password" />
                  <img src="/public/padlock.png" alt="Password" className="input-icon" />
                </div>
                <LoginButton />
              </form>
              
              <div className="auth-switch">
                <p>Не маєте акаунту?</p>
                <Link to="/auth/register" className="switch-link">Зареєструватися</Link>
              </div>
            </div>
          ) : (
            <div className="register-form">
              <h2 className="auth-title">Зареєструватися</h2>
              <form>
                <div className="input-with-icon">
                  <input type="text" placeholder="Username" />
                  <img src="/public/user.png" alt="Username" className="input-icon" />
                </div>
                <div className="input-with-icon">
                  <input type="email" placeholder="Email" />
                  <img src="/public/email (1).png" alt="Email" className="input-icon" />
                </div>
                <div className="input-with-icon">
                  <input type="password" placeholder="Password" />
                  <img src="/public/padlock.png" alt="Password" className="input-icon" />
                </div>
                <RegisterButton />
              </form>
              
              <div className="auth-switch">
                <p>Вже маєте акаунт?</p>
                <Link to="/auth/login" className="switch-link">Увійти</Link>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer showAuthButtons={false} showContactLink={false} />
    </div>
  );
}

export default Auth;