import React from "react";

const searchBox = ({ value, onChange }) => {
  return (
    <div className="form-group mt-2">
      <input
        onChange={e => onChange(e.target.value)}
        value={value}
        className="form-control"
        placeholder="Search..."
        type="text"
      />
    </div>
  );
};

export default searchBox;
