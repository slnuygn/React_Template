import { useState, useEffect } from 'react';

/**
 * Local Storage'ı yönetmek için özel hook
 * @param {string} key - Local Storage'daki verinin anahtarı
 * @param {any} defaultValue - Varsayılan değer
 * @returns {Array} - [storedValue, setValue] (state ve güncelleme fonksiyonu)
 */
const useLocalStorage = (key, defaultValue) => {
  // Local Storage'dan değeri al veya varsayılan değeri kullan
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Local storage'dan veri alınırken hata: ${error}`);
      return defaultValue;
    }
  });

  // Değer değiştiğinde Local Storage'ı güncelle
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Local storage'a veri yazılırken hata: ${error}`);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage; 