import { useState, useEffect } from 'react';

const mockUsers = [
  { id: 1, email: 'user@test.com', password: '123456', username: 'animefan' },
];

export const useUserSession = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState('');


  const delay = (ms) => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    const savedUser = localStorage.getItem('animeUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const userLogin = async (credentials) => {
    setAuthError('');
    setAuthSuccess('');

    await delay(700); 

    try {
      const foundUser = mockUsers.find(u =>
        (u.email === credentials.username || u.username === credentials.username) &&
        u.password === credentials.password
      );

      if (foundUser) {
        const userData = {
          id: foundUser.id,
          email: foundUser.email,
          username: foundUser.username
        };

        setCurrentUser(userData);
        localStorage.setItem('animeUser', JSON.stringify(userData));
        setAuthSuccess('Вітаємо! Ви успішно увійшли!');
        return { success: true };
      } else {
        setAuthError('Невірне імʼя користувача або пароль');
        return { success: false };
      }
    } catch {
      setAuthError('Сталася помилка. Спробуйте ще раз');
      return { success: false };
    }
  };

  const userRegister = async (userData) => {
    setAuthError('');
    setAuthSuccess('');

    await delay(700); 

    try {
      const userExists = mockUsers.find(u =>
        u.email === userData.email || u.username === userData.username
      );

      if (userExists) {
        setAuthError('Користувач з таким email або іменем вже існує');
        return { success: false };
      }

      const newUser = {
        id: mockUsers.length + 1,
        email: userData.email,
        password: userData.password,
        username: userData.username
      };

      mockUsers.push(newUser);

      const userInfo = {
        id: newUser.id,
        email: newUser.email,
        username: newUser.username
      };

      setCurrentUser(userInfo);
      localStorage.setItem('animeUser', JSON.stringify(userInfo));
      setAuthSuccess('Реєстрація пройшла успішно! Ласкаво просимо!');
      return { success: true };

    } catch {
      setAuthError('Помилка реєстрації');
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