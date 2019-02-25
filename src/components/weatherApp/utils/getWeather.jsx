import React from "react";
import axios from "axios";

function getWeather({ city, apiKey }) {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
    )
    .then(response => {
      const result = response;
      this.setState({ result });
      console.log(result);
      return result;
    })
    .catch(error => {
      console.log(error);
    });
}

export default getWeather;
