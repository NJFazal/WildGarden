import React, { useState } from 'react';
import '../App.css';

const ZipCodeSearch = () => {
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleSearch = () => {
    // Make the API call to fetch the zip code details
    fetch(`https://app.zipcodebase.com/api/v1/search?apikey=YOUR-APIKEY&codes=10005%2C51503/${zipCode}`)
      .then((response) => response.json())
      .then((data) => {
        setCity(data.city);
        setState(data.state);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <input type="text" value={zipCode} onChange={handleZipCodeChange} placeholder="Enter a zip code" />
      <button onClick={handleSearch}>Search</button>
      {city && state && (
        <div>
          <p>City: {city}</p>
          <p>State: {state}</p>
        </div>
      )}
    </div>
  );
};

export default ZipCodeSearch;
