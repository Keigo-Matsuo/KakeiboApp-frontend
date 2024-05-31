import { useEffect, useState } from 'react';
import axios from 'axios';

export const useKakeiboData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('http://localhost:8080/api/kakeibo');
        // const response = await fetch('http://localhost:8080/nextTarget');
        // const result = await response.json();

        await axios.get('http://localhost:8080/api/payments/1').then((res)=>{
          setData(res.data);
        })
        // setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};
