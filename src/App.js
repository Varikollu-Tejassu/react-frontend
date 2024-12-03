import './App.css';
import React, { useEffect, useState } from 'react';
import { fetchData } from './api/Service/appservice';
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData();
        console.log(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
    <h1>hii tejas</h1>
    <h2>venkyh2>
    <h3>siva</h3>
      <h1>Backend Data:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default App;
