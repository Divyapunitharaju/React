 import React, { useState } from 'react';
// import axios from 'axios';

// const apiKey = "fc0bade6d90cb32856dbfddd129fa39b";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const App = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [city, setCity] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleInputChange = async (e) => {
//     const input = e.target.value.trim();
//     setCity(input);

//     if (input.length > 0) {
//       try {
//         const response = await axios.get(`http://api.geonames.org/searchJSON?q=${input}&maxRows=10&username=divya`);
//         const data = response.data;
//         setSearchResults(data.geonames.map(item => item.name));
//       } catch (error) {
//         console.error('Error', error);
//       }
//     } else {
//       setSearchResults([]);
//     }
//   };

//   const handleSelectResult = async (selectedCity) => {
//     setCity(selectedCity);
//     setSearchResults([]);

//     try {
//       const response = await axios.get(`${apiUrl}${selectedCity}&appid=${apiKey}`);
//       setWeatherData(response.data);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   };

//   const displaySearchResults = () => {
//     return (
//       <ul>
//         {searchResults.map((result, index) => (
//           <li key={index} onClick={() => handleSelectResult(result)}>
//             {result}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   const displayWeatherInfo = () => {
//     if (!weatherData) return null;
//     return (
//       <div className="weather-info">
//         <p className="city">{weatherData.name}</p>
//         <p className="temperature">Temperature: {weatherData.main.temp}°C</p>
//         <p className="humidity">Humidity: {weatherData.main.humidity}%</p>
//         <p className="visibility">Visibility: {weatherData.visibility}km</p>
//         <p className="pressure">Pressure: {weatherData.main.pressure}hPa</p>
//         <p className="wind">Wind: {weatherData.wind.speed}m/s</p>
//       </div>
//     );
//   };

//   return (
//     <div className="App">
//       <div className="search-box">
//         <input
//           type="text"
//           value={city}
//           onChange={handleInputChange}
//           className="search-location"
//           placeholder="Search location..."
//         />
//         <button onClick={() => handleSelectResult(city)} className="search-button">
//           Search
//         </button>
//       </div>

//       <div className="search-results">
//         {searchResults.length > 0 && displaySearchResults()}
//       </div>

//       {displayWeatherInfo()}

//     </div>
//   );
let [location,setLocation]=useState();
return(
  
<div className='app'>
  
  <input type="text" placeholder="search location" value={input}
    onChange={(e)=>setLocation(e.target.value)}
  >  </input>
  <button >Search</button>
</div>
)


}

export default App;


