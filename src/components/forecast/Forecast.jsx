import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
import './forecast.css';
const week_days = ['monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'sunday'];

const Forecast = ({ data }) => {
  const dayInAweek = new Date().getDay();
  const newDays =  week_days.slice(dayInAweek, week_days.length).concat(week_days.slice(0, dayInAweek));
  return (
    <>
      <label className='title'>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='daily-item'>
                  <img className='icon-small' src={`icons/${item.weather[0].icon}.png`} alt="img" />
                  <label className='day'>{newDays[index]}</label>
                  <label className='desc'>{item.weather[0].description}</label>
                  <label className='min-max'>
                    {Math.round(item.main.temp_min)}°C /{" "}{Math.round(item.main.temp_max)}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='daily-details-grid'>
                <div className="daily-details-grid-item">
                  <label>Pressure</label>
                   <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity</label>
                   <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds</label>
                   <label>{item.clouds.all}</label>
                </div>
                 <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                   <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea Level</label>
                   <label>{item.main.sea_level} m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels Like</label>
                   <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
     
    </>
    
  )
}

export default Forecast
