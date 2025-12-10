import { useState } from 'react';
import axios from 'axios'; 

export const useContact = (axiosInstance = null) => {
  const [contactError, setContactError] = useState('');
  const [contactSuccess, setContactSuccess] = useState('');

  const axiosToUse = axiosInstance || axios; // ← І ТУТ!

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