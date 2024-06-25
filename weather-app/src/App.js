
  import React, { useState } from 'react';
  import axios from 'axios';
  import './App.css'; 
  import group48 from './assets/group-48.png'
  import search   from './assets/icon-search.png'
  import   left from './assets/icon-chevron-left-arrow.png'
  import  temp from './assets/icon-temperature.png'
  import right from './assets/icon-chevron-left-arrow-DZ7.png'
  import group17 from './assets/group-17.png'
  import group42 from './assets/group-42.png'
  import group43 from './assets/group-43.png'
  import group44 from './assets/group-44.png'
  import group45 from './assets/group-45.png'
  import group46 from './assets/group-46.png'
  import group47 from './assets/group-47.png'

  

  const apiKey = "fc0bade6d90cb32856dbfddd129fa39b";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  
  const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleInputChange = async (e) => {
      const input = e.target.value.trim();
      setCity(input);
  
      if (input.length > 0) {
        try {
          const response = await axios.get(`http://api.geonames.org/searchJSON?q=${input}&maxRows=10&username=divya`);
          const data = response.data;
          setSearchResults(data.geonames.map(item => item.name));
        } catch (error) {
          console.error('Error', error);
        }
      } else {
        setSearchResults([]);
      }
    };
  
    const handleSelectResult = async (selectedCity) => {
      setCity(selectedCity);
      setSearchResults([]);
  
      try {
        const response = await axios.get(`${apiUrl}${selectedCity}&appid=${apiKey}`);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
  
    const displaySearchResults = () => {
      return (
        <ul>
          {searchResults.map((result, index) => (
            <li key={index} onClick={() => handleSelectResult(result)}>
              {result}
            </li>
          ))}
        </ul>
      );
    };
   



    // const [weatherData, setWeatherData] = useState(null);
    // const [city, setCity] = useState('');
  
    // const checkWeather = async (city) => {
    //   try {
    //     const response = await axios.get(`${apiUrl}${city}&appid=${apiKey}`);
    //     setWeatherData(response.data);
    //   } catch (error) {
    //     console.error('Error fetching weather data:', error);
    //   }
    // };
  
    // const handleSearch = () => {
    //   checkWeather(city);
    // };


  return (
    <div className="App">
      <div className="desktop-1-p2q">
        <div className="auto-group-g55f-4Sy">
          <div className="auto-group-skvh-5Fb">
            <div className="auto-group-hwyv-ipM">
              <img className="group-48-47X" src={group48} alt="Weather Icon" />
              <p className="weatherme-Ne1">WeatherMe</p>
              <p className="pm-Fho">21:00 pm</p>
            </div>
            <div className="auto-group-uxtb-xMK">
              <div className="auto-group-7q4y-H8h">
                <span className="auto-group-7q4y-H8h-sub-0">Today</span>
                <span className="auto-group-7q4y-H8h-sub-1"> </span>
              </div>
              <p className="tommorow-fHf">Tomorrow</p>
              <p className="monthly-forecast-Bmo">Monthly Forecast</p>
            </div>
          </div>
          <div className="auto-group-kklm-JrR">
            <p className="c-pZs">°C</p>
            <div className="auto-group-eyu1-8aZ">
              <div className="ellipse-5-E7o"></div>
            </div>
            <p className="f-XMo">°F</p>
          </div>
          <div className="search-box" style={{ marginLeft: '360px', backgroundColor: 'white', width: '810px', borderRadius: '18px', padding: '0.5em' }}>
            <div className="row">
              {/* <input type="text" id="input" autoComplete="off" className="search-location-c9s" style={{ height: '60px', width: '600px', borderRadius: '18px', fontFamily: 'Times New Roman, Times, serif', fontSize: '3em', flex: 1 }} placeholder="Search location..." spellCheck="false" /> */}
              {/* <button style={{ background: 'transparent', border: 0, outline: 0 }}> */}          
                  <input
              type="text"
              value={city}
              // onChange={(e) => setCity(e.target.value)}
              onChange={handleInputChange}
              id="input" autoComplete="off" className="search-location-c9s" style={{ height: '60px', width: '600px', borderRadius: '18px', fontFamily: 'Times New Roman, Times, serif', fontSize: '3em', flex: 1 }} placeholder="Search location..." spellCheck="false"
            />
                 {/* <button onClick={handleSearch} style={{ background: 'transparent', border: 0, outline: 0 }}> */}
                 <button onClick={() => handleSelectResult(city)} className="search-button" style={{ background: 'transparent', border: 0, outline: 0 }}>            

                    <img className="icon-search-tUm" style={{ height: '40px', width: '40px', marginLeft: '10px', cursor: 'pointer' }} src={search}  />
                  </button>
            </div>
            <div className="result" style={{ backgroundColor: 'white', width: '790px', cursor: 'pointer' }}>
            {searchResults.length > 0 && displaySearchResults()}
            </div>
            
          </div>
        </div>
        <div className="auto-group-ej8u-ajP">
          <div className="rectangle-6-j6V"></div>
          <img className="icon-chevron-left-arrow-beV" src={left} alt="Chevron Left Arrow" />
          <div className="auto-group-tnhb-mSV">
            <div className="auto-group-hpxy-gZT">
            <p className="city">{weatherData?.name || 'Burden'}</p>
            </div>
            <div className="auto-group-67e5-gSy">
              <p className="fixed-date">Jan 31,  Wed</p>
              <img className="icon-temperature-XyP" src={temp} alt="Temperature" />
              <p className="celcius">{weatherData?.main.temp || '27°C'}</p>
            </div>
            <div className="auto-group-qnkd-8TP">
              <div className="auto-group-qgoo-opR">
                <div className="auto-group-bved-ve9">
                  <p className="humidityy">Humidity</p>
                  <p className="humidity">{weatherData?.main.humidity || '99%'}</p>
                </div>
                <div className="auto-group-uspm-38R">
                  <p className="visiblityy">Visibility</p>
                  <p className="visibility">{weatherData?.visibility || '8km'}</p>
                </div>
              </div>
              <div className="auto-group-ezlv-fvV">
                <p className="air-pressure-dMX">Air Pressure</p>
                <p className="pressure">{weatherData?.main.pressure|| '1005hPa'}</p>
              </div>
              <div className="auto-group-jlqm-gKo">
                <p className="wind-dkq">Wind</p>
                <p className="wind">{weatherData?.wind.speed|| '2mph'}</p>
              </div>
            </div>
          </div>
          <img className="icon-chevron-left-arrow-aZb" src={right} alt="Chevron Left Arrow" />
          <div className="rectangle-7-7C9"></div>
        </div>
        <div className="auto-group-jrht-ceh">
          <div className="auto-group-znwo-9uX">
          <div class="auto-group-yerr-ts7">
        <div class="rectangle-8-qXT">
        </div>
        <div class="rectangle-15-8WZ">
        </div>
        <img class="group-17-PSV" src={group17}/>
        <p class="pm-KL9">19:00 pm</p>
        <p class="item-29-Cuj">29°</p>
      </div>
      <div class="auto-group-kwj9-eFw">
        <div class="rectangle-9-Zdo">
        </div>
        <div class="rectangle-16-sPb">
        </div>
        <img class="group-42-A7o" src={group42}/>
        <p class="pm-6n9">21:00 pm</p>
        <p class="item-27-Qnq">22°</p>
      </div>
      <div class="auto-group-xyxr-j4R">
        <div class="rectangle-10-sRX">
        </div>
        <div class="rectangle-17-oKB">
        </div>
        <img class="group-43-63P" src={group43}/>
        <p class="pm-1g9">23:00pm</p>
        <p class="item-27-Kgq">24°</p>
      </div>
      <div class="auto-group-eupp-DGR">
        <div class="rectangle-11-YpV">
        </div>
        <div class="rectangle-18-UTF">
        </div>
        <p class="am-xtD">1:00am</p>
        <p class="item-26-tms">26°</p>
        <img class="group-44-pfX" src={group44}/>
      </div>
      <div class="auto-group-sx3f-9xh">
        <div class="rectangle-12-gBw">
        </div>
        <div class="rectangle-19-Q7w">
        </div>
        <p class="am-Udb">3:00am</p>
        <p class="item-29-bCR">29°</p>
        <img class="group-45-69B" src={group45}/>
      </div>
      <div class="auto-group-y2zk-1mw">
        <div class="rectangle-13-APw">
        </div>
        <div class="rectangle-20-tqj">
        </div>
        <img class="group-46-P1o" src={group46}/>
        <p class="am-XNu">5:00am</p>
        <p class="item-31-rRB">31°</p>
      </div>
          </div>
          <div className="auto-group-2wjp-ARs">
            <div className="rectangle-14-iiH"></div>
            <p className="am-k9B">7:00am</p>
            <p className="item-27-sjb">25°</p>
            <img className="group-47-NwF" src={group47} alt="Weather Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
