import React, { Component } from "react";
import BootstrapCard from "./utils/bootstrapCard";

export default class home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="mt-3 col-12">
            <h3 className="bgbox">App Directory:</h3>
          </div>
          <div className="col-6">
            <BootstrapCard
              header="Todo App"
              text="Simple Todo app based on React js."
              link="/todolist"
            />
            <BootstrapCard
              header="Simple Search App"
              text="Simple Search app with axiom and JSON PlaceHolder api"
              link="/search"
            />
            <BootstrapCard
              header="Simple Rich Text Editor App"
              text="Simple Editor app with draft.js from facebook"
              link="/editor"
            />
          </div>
          <div className="col-6">
            <BootstrapCard
              header="Weather App"
              text="Weather  React js app and OpenWeatherMap api"
              link="/weather"
            />
            <BootstrapCard
              header="Pix Gallery App"
              text="Simple Gallery app with unsplash.js and material ui"
              link="/pix"
            />
          </div>
        </div>
      </div>
    );
  }
}
