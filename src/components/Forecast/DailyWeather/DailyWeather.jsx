import React, { useState, useEffect } from 'react';
import './DailyWeather.css';
import Fetch from '../Fetch/Fetch.jsx';

const DailyWeather = ({ data }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setWeatherData(data.list)
      setLoading(false)
    }
  }, [data]);

  const date = new Date();
  const displayDate = new Date();
  const indicesToShow = [0, 8, 16, 24, 32]

  return (
    <div>
      <h3 style={{ textAlign: 'center', margin: '2rem', color: '#4cafa2' }}>Daily Weather Forecast</h3>

      {loading && <p className="Loading" style={{ color: 'blue', fontSize: '150%', fontWeight: '900' }}>Loading...</p>}

      <div className='box'>
        {weatherData && indicesToShow.map((index) => {
          const dailyData = weatherData[index];
          displayDate.setDate(date.getDate() + (index / 8));
          const formattedDate = displayDate.toDateString().replace(displayDate.getFullYear(), '');

          return (
            <div key={index} className='weather'>
              <p style={{ color: 'tomato' }}> {formattedDate}</p>
              <hr></hr>
              {/* <p id='days' style={{ color: '#197468' }}> {dayOfWeek}</p> */}
              <p><img
                src={`http://openweathermap.org/img/wn/${dailyData.weather[0].icon}@2x.png`}
                alt={dailyData.weather[0].description}
              /></p>
              <p>{dailyData.main.temp_min.toFixed(0)}°C / {dailyData.main.temp_max.toFixed(0)}°C</p>
              <p>Feels Like: {dailyData.main.feels_like.toFixed(0)}°C</p>
              <p>Humidity: {dailyData.main.humidity}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyWeather;
