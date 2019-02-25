import React, { Component } from "react";
import Title from "./components/weatherApp/title";
import Fields from "./components/weatherApp/fields";
import WeatherComp from "./components/weatherApp/weatherComp";
// import Unsplash, { toJson } from "unsplash-js";

class WeatherApp extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    iconId: undefined,
    bgImage: undefined
  };
  // componentDidMount = () => {
  //   const newUnsplash = new Unsplash({
  //     applicationId:
  //       "b65197c789b9c2c09c484c4761729daaee6bf6ed3508931ccd7e67446a1e3cd3",
  //     secret: "9ae5f140d4c6165459a52eb6cd14c3dfbcb40b5aae66217e12b19d89f486b4ed"
  //   });
  //   const bgImage = newUnsplash.photos
  //     .getRandomPhoto({ featured: "true" })
  //     .then(toJson)
  //     .then(json => {
  //       const imageFull = json.urls.full;
  //       this.setState({ imageFull });
  //     });
  // };
  // getBgImage = async e => {
  //   const bgImage = await Unsplash.photos
  //     .getRandomPhoto({ featured: "true" })
  //     .then(toJson);
  //   console.log(bgImage);
  // };
  fieldOnSubmit = async e => {
    this.setState({
      temperature: undefined,
      city: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      iconId: undefined,
      bgImage: undefined
    });
    const city = e.target.elements.City.value;
    e.preventDefault();
    const apiKey = "1486e6a7713e93a09d9b985d8f9bba69";
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
    );
    const result = await apiCall.json();
    const cod = result.cod;
    if (cod === 200) {
      this.setState({
        temperature: result.main.temp,
        city: result.name,
        humidity: result.main.humidity,
        description: result.weather[0].description,
        iconId: result.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        error: result.message
      });
    }
  };

  render() {
    console.log(this.state);
    const {
      temperature,
      city,
      humidity,
      description,
      error,
      iconId
    } = this.state;
    return (
      <div className="row align-items-center h-100">
        <div className="mx-auto">
          <div className="card text-center">
            <div className="card-header">
              <Title />
            </div>
            <div className="card-body">
              <Fields submitHandler={this.fieldOnSubmit} />
            </div>
            <div className="card-footer">
              <WeatherComp
                iconId={iconId}
                temperature={temperature}
                city={city}
                humidity={humidity}
                description={description}
                error={error}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherApp;
