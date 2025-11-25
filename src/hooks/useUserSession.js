import { useState, useEffect } from 'react';
import axios from 'axios'; 


export const useUserSession = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState('');


  useEffect(() => {
    const savedUser = localStorage.getItem('animeUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);


  const userLogin = async (credentials) => {
    setAuthError('');
    setAuthSuccess('');

    try {
        const response = await axios.post("http://localhost:5000/api/login", {
        email: credentials.email, 
        password: credentials.password });
  
        const userData = {
        id: response.data.user_id || response.data.user.id,
        email: response.data.user.email,
        name: response.data.user.name    
    };
        setCurrentUser(userData); 
        localStorage.setItem('animeUser', JSON.stringify(userData));
        setAuthSuccess('Вітаємо! Ви успішно увійшли!');
        return { success: true };

    } catch (error) {
      setAuthError(error.response?.data?.message || 'Сталася помилка. Спробуйте ще раз');
      return { success: false };
    }
  };


  const userRegister = async (userData) => {
    setAuthError('');
    setAuthSuccess('');
    try {
      const response = await axios.post("http://localhost:5000/api/user", 
      {
        name: userData.name,     
        email: userData.email,
        password: userData.password
      });  
      
      const newUser = {
        id: response.data.savedData._id,
        email: response.data.savedData.email,
        name: response.data.savedData.name
      };

      setCurrentUser(newUser);
      localStorage.setItem('animeUser', JSON.stringify(newUser));
      setAuthSuccess('Реєстрація пройшла успішно! Ласкаво просимо!');
      return { success: true };

      } catch(error) {
      setAuthError(error.response?.data?.message || 'Помилка реєстрації');
      return { success: false };
    }
  };

  
  const userLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('animeUser');
  };

  return {
    currentUser,
    authError,
    authSuccess,
    userLogin,
    userRegister,
    userLogout,
    isUserLoggedIn: !!currentUser
  };
};