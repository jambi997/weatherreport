import React from "react";
import '../App.css';

export default function SearchBar() {


  return (
    <div className="weather-input">
      <input name="city" type="text" defaultValue={"budapest"} className="input"></input>
    </div>
  )
}
