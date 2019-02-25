import React, { Component } from "react";
import axios from "axios";
import Searchbox from "./components/simpleSearch/searchBox";
import ListComp from "./components/simpleSearch/listComp";
import "./App.css";

class SimpleSearch extends Component {
  state = {
    users: [],
    searchQuery: ""
  };
  async componentDidMount() {
    const { data: users } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ users });
  }
  handleChange = query => {
    this.setState({ searchQuery: query });
  };
  pageData = () => {
    const { searchQuery } = this.state;
    const data = [...this.state.users];
    const users = data.filter(
      m =>
        m.name.toLowerCase().startsWith(searchQuery) ||
        m.phone.startsWith(searchQuery)
    );
    return users;
  };
  render() {
    const usersWithFilter = this.pageData();
    return (
      <div className="row">
        <div className="col bgbox">
          <Searchbox
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <ListComp data={usersWithFilter} />
        </div>
      </div>
    );
  }
}

export default SimpleSearch;
