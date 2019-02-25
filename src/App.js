import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./home";
import DraftJsEditor from "./components/textEditor/draftJsEditor";
import TodoListApp from "./components/todoApp/TodoListApp";
import WeatherApp from "./WeatherApp";
import SimpleSearch from "./SimpleSearch";
import PixApp from "./PixApp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main className="container-fluid h-100 dot">
          <div className="container">
            <Switch>
              <Route path="/todolist" component={TodoListApp} />
              <Route path="/weather" component={WeatherApp} />
              <Route path="/pix" component={PixApp} />
              <Route path="/search" component={SimpleSearch} />
              <Route path="/home" component={Home} />
              <Route path="/editor" component={DraftJsEditor} />
              <Redirect from="/" to="/home" />
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
