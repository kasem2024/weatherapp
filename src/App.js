
import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Forecast from './components/forecast/Forecast';
import { API_WEATHER_URL, API_Key } from './api';
import  {useState}  from 'react';
function App() {


  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');
    const  currentWeatherFetch = fetch(`${API_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`)
    const currentforecastFetch = fetch(`${API_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`)
    
    Promise.all([currentWeatherFetch, currentforecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ ...weatherResponse,city:searchData.label  });
        setForecast({ ...forecastResponse,city:searchData.label, });
      })
      .catch((err)=> console.log(err))
    }
    console.log(currentWeather);
    console.log(forecast)
  
  return (
    <div className="container">
      <Search
        onSearchChange={handleOnSearchChange}
      />
      {
        currentWeather &&
        <CurrentWeather
          currentWeather = {currentWeather}
        />
      }
      {
      forecast &&
      <Forecast
      data={forecast}
      />}
      
    </div>
  );
}


export default App;
