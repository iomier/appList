import React, { Component } from "react";
import TodoField from "./TodoField";
import TodoTitle from "./TodoTitle";
import TodoList from "./TodoList";

class TodoListApp extends Component {
  state = {
    items: [],
    currentItem: { text: "", key: "" },
    isClicked: "false"
  };

  onChangeHandler = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem
    });
  };
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" }
      });
    }
  };
  deleteItem = keyid => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== keyid;
    });
    this.setState({ items: filteredItems });
  };
  doneItem = () => {
    this.setState({ isClicked: "true" });
    console.log("item clicked");
  };
  render() {
    return (
      <div className="row">
        <div className="col">
          <TodoTitle />
          <TodoField
            onChangeHandler={this.onChangeHandler}
            onSubmitHandler={this.addItem}
            inputElement={this.inputElement}
            currentItem={this.state.currentItem}
          />
          <TodoList
            onClickDelete={this.deleteItem}
            onClickDone={this.doneItem}
            data={this.state}
          />
        </div>
      </div>
    );
  }
}

export default TodoListApp;
