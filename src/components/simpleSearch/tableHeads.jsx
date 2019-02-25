import React from "react";
const tableHeads = props => {
  return (
    <thead className="thead-dark">
      <tr>
        {props.heads.map(head => (
          <th key={head}>{head}</th>
        ))}
      </tr>
    </thead>
  );
};

export default tableHeads;
