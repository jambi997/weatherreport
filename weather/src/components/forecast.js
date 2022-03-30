import React from "react";
import '../App.css';

export default function Forecast(props) {

  return (
    <div className="weather-output-forecast">
      <h1>
        forecast:
      </h1>
      <table >
        <tbody className="weather-output-forecast-table">
          {props.forecast.map((item, idx) => <tr key={idx} className="weather-output-forecast-tr">
            <td>{item.time.split(" ").shift()}</td>
            <td>{item.time.split(" ").pop()} </td>
            <td><img src={item.condition.icon} height="70px" ></img></td>
            <td>{item.temp_c}° </td>
          </tr>)}
        </tbody>

      </table>
    </div>
  )
}
