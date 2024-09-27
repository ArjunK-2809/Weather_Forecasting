import React, { useEffect, useState } from 'react';

const CurrentLocation = ({ API_key }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`your-api-endpoint?apiKey=${API_key}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [API_key]); // Add API_key to the dependency array

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data && data.length > 0 ? (
        <div>{data[0].name}</div>
      ) : (
        <div>Data is not defined or empty</div>
      )}
    </div>
  );
};

export default CurrentLocation;

