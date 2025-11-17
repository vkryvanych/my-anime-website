import { useState } from 'react';

export const useContact = () => {
  const [contactError, setContactError] = useState('');
  const [contactSuccess, setContactSuccess] = useState('');

  const delay = (ms) => new Promise(res => setTimeout(res, ms));

  const sendMessage = async (messageData) => {
    setContactError('');
    setContactSuccess('');

    await delay(700);

    try {

      console.log('Контактна форма відправлена:', messageData);

      setContactSuccess(
        'Дякуємо! Ваше повідомлення відправлено! Ми відповімо вам найближчим часом.'
      );
      return { success: true };

    } catch (err) {
      setContactError('Помилка при відправці повідомлення. Спробуйте ще раз.');
      return { success: false };
    }
  };

  return {
    contactError,
    contactSuccess,
    sendMessage
  };
};