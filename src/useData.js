import { useState, useEffect } from 'react';

const useData = (API) => {
  const [carta, setCarta] = useState([]);
  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => setCarta(data));
  }, []);
  return carta;
};

export default useData;