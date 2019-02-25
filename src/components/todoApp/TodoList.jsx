import React from "react";

function TodoList(props) {
  return (
    <ul className="list-group">
      {props.data.items.map(m => (
        <li
          disabled={true}
          onClick={() => {
            props.onClickDone();
            console.log("clicked");
          }}
          className={
            "list-group-item d-flex justify-content-between align-items-center" +
            (props.onClickDone ? "disabled" : null)
          }
          key={m.key}>
          {m.text}
          <span
            onClick={() => props.onClickDelete(m.key)}
            className="btn btn-primary">
            X
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
