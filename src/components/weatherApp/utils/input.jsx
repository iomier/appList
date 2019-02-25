import React from "react";

function input({ name }) {
  return (
    <div className="form-group">
      <input
        placeholder={name}
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
    </div>
  );
}

export default input;
