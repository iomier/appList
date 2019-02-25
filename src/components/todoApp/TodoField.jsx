import React from "react";

const TodoField = props => {
  return (
    <div className="form-group">
      <form onSubmit={props.onSubmitHandler}>
        <input
          className="form-control"
          onChange={props.onChangeHandler}
          value={props.currentItem.text}
          ref={props.inputElement}
          placeholder="Enter Task.."
          type="text"
        />
        <button className="mt-3 btn btn-primary btn-block">Submit</button>
      </form>
    </div>
  );
};

export default TodoField;
