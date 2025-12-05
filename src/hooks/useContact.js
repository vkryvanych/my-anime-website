import { useState } from 'react';

// Додаємо axios як параметр з дефолтним значенням
export const useContact = (axiosInstance = null) => {
  const [contactError, setContactError] = useState('');
  const [contactSuccess, setContactSuccess] = useState('');

  const axiosToUse = axiosInstance || (() => {
    // Динамічний імпорт, щоб уникнути проблем з тестами
    const axios = require('axios');
    return axios;
  })();

  const sendMessage = async (messageData) => {
    setContactError('');
    setContactSuccess('');

    try {
      const response = await axiosToUse.post("http://localhost:5000/api/contact", 
        {
          username: messageData.username,  
          email: messageData.email,
          message: messageData.message
        }
      );
      setContactSuccess(response.data.message);
      return { success: true };

    } catch (error) {
      setContactError(error.response?.data?.errorMessage || 'Помилка при відправці повідомлення. Спробуйте ще раз.');
      return { success: false };
    }
  };

  return {
    contactError,
    contactSuccess,
    sendMessage
  };
};