import { useState, useEffect } from 'react';

/**
 * API istekleri için özel hook
 * @param {string} url - İstek yapılacak API endpoint'i
 * @param {Object} options - Fetch API için options
 * @returns {Object} - { data, loading, error, refetch }
 */
const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message || 'Bir hata oluştu');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  // Manuel olarak yeniden istek yapmayı sağlayan fonksiyon
  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useFetch; 