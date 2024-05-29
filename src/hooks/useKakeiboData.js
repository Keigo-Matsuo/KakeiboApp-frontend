import { useEffect, useState } from 'react';

export const useKakeiboData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('http://localhost:8080/api/kakeibo');
        const response = await fetch('http://localhost:8080/nextTarget');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};
