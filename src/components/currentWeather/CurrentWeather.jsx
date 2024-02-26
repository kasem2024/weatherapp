import React from 'react';
import "./weather.css";
const CurrentWeather = ({currentWeather}) => {
  return (
    <div className='weather'>
      <div className="top">
        <div>
          <p className='city'>{currentWeather.city}</p>
          <p className='weather-description'>{currentWeather.weather[0].description}</p>
        </div>
        <img src={`icons/${currentWeather.weather[0].icon}.png`} alt="" className='weather-icon' />
      </div>
      <div className="bottom">
          <p className='temperature'>{Math.round(currentWeather.main.temp)}°C</p>
          <div className="details">
              <div className="parameter-row">
                <span className='parameter-label'> Details</span>
              </div>
              <div className="parameter-row">
                <span className='parameter-label'> Feels Like</span>
                <span className='parameter-value'> {Math.round(currentWeather.main.feels_like)}°C</span>
              </div>
              <div className="parameter-row">
                <span className='parameter-label'> Wind</span>
                <span className='parameter-value'> {currentWeather.wind.speed} m/s</span>
              </div>
              <div className="parameter-row">
                <span className='parameter-label'> humidity</span>
                <span className='parameter-value'> {currentWeather.main.humidity} %</span>
              </div>
              <div className="parameter-row">
                <span className='parameter-label'> Pressure</span>
                <span className='parameter-value'> {currentWeather.main.pressure} hpa</span>
              </div>
          </div>
      </div>
    </div>
)
}

export default CurrentWeather

