import React from "react";
import '../App.css';

export default function Report(props) {
  const current = props.current
  return (
    <div className="weather-content">
      <div className="weather-icon">
        <img src={current.condition.icon} height="150px" ></img>
        <div >
          <h1>
            {current.temp_c}° celsius
          </h1>
          {current.condition.text}
        </div>
      </div>
      <div className="weather-table">
        <div className="weather-column">
          <div>
            {current.cloud}<div>cloud</div>
          </div>
          <div>
            {current.temp_f}°<div>farenheit</div>
          </div>
        </div>
        <div className="weather-column">
          <div>
            {current.gust_kph}kph <div>gust</div>
          </div>
          <div>
            {current.humidity} <div>humidity</div>
          </div>
        </div>
        <div className="weather-column">
          <div>
            {current.wind_degree}° <div>wind degree</div>
          </div>
          <div>
            {current.wind_kph}kph <div>wind</div>
          </div>
        </div>
      </div>
    </div >
  )
}
