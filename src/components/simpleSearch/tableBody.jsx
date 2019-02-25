import React from "react";
const tableBody = ({ data: users }) => {
  return (
    <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.phone}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default tableBody;
