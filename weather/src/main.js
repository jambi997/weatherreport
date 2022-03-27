import React, { useState, useEffect } from "react";
import WeatherService from "./services/weatherService";
import './App.css';
import { today } from "./componenets/today";

const weatherService = new WeatherService()

export default function App() {
  const [location, setLocation] = useState(null)
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState([])
  const [errormsg, setErrormsg] = useState(null)
  let city = "Budapest"
  let days = 2
  let currentDate = new Date();
  let cDay2 = currentDate.getDay()
  function weatherHandler(e) {
    e.preventDefault()
    city = e.target.city.value
    weatherService.getForecast(city, days)
      .then(response => response.json())
      .then(body => {
        console.log(body)
        setLocation(body.location)
        setCurrent(body.current)
        setForecast(body.forecast.forecastday[0].hour)
        setErrormsg(null)
      }).catch((error) => {
        setCurrent(null)
        setErrormsg(error)
      })
  }

  return (
    <div className="weather">
      <form className="weather-form" onSubmit={weatherHandler}>
        <div className="weather-input">
          <input name="city" type="text" defaultValue={"budapest"} className="input"></input>
        </div>
      </form>
      {!errormsg && current && location && forecast && <React.Fragment> <div>
      </div>
        <div className="weather-output-current">
          <div className="weather-location">
            {location.region}, {location.country}
          </div>
          <div className="weather-date">
            {location.localtime}, {today(cDay2)}
          </div>
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
          <div className="weather-output-forecast">
            <h1>
              forecast:
            </h1>
            <table >
              <tbody className="weather-output-forecast-table">
                {forecast.map((item, idx) => <tr key={idx} className="weather-output-forecast-tr">
                  <td>{item.time.split(" ").shift()}</td>
                  <td>{item.time.split(" ").pop()} </td>
                  <td><img src={item.condition.icon} height="70px" ></img></td>
                  <td>{item.temp_c}° </td>
                </tr>)}
              </tbody>

            </table>
          </div>
        </div > </React.Fragment >}
      {errormsg && <React.Fragment ><div className="error-message">Error:{errormsg.message}</div> </React.Fragment >}
    </div >
  );
} 