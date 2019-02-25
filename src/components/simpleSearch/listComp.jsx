import React from "react";
import TableHead from "./tableHeads";
import TableBody from "./tableBody";

const listComp = props => {
  const heads = ["ID", "Name", "Phone"];
  return (
    <table className="table table-bordered">
      <TableHead heads={heads} />
      <TableBody data={props.data} />
    </table>
  );
};

export default listComp;
