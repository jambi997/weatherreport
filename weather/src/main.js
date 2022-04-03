import React, { useState, useEffect } from "react";
import WeatherService from "./services/weatherService";
import './App.css';
import { today } from "./components/today";
import Forecast from "./components/forecast";
import Report from "./components/report";
import Media from "react-media"
import SearchBar from "./components/searchbar";
import SearchBar2 from "./components/searchbar2";

const weatherService = new WeatherService()

export default function Main(props) {
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
        setErrormsg("Invalid city")
      })
  }

  return (
    <div className="weather">
      <form className="weather-form" onSubmit={weatherHandler}>
        <SearchBar />
      </form>
      {!errormsg && current && location && forecast && <React.Fragment>
        <div>
        </div>
        <div className="weather-output-current">
          <div className="weather-location">
            {location.region}, {location.country}
          </div>
          <div className="weather-date">
            {location.localtime}, {today(cDay2)}
          </div>
          <Report current={current} />
          <Forecast forecast={forecast} />
        </div >
      </React.Fragment >}
      {errormsg && <React.Fragment ><div className="error-message">Error: {errormsg}</div> </React.Fragment >}
    </div >
  );
} 