import React from "react";

function Roster({ detailed, roster }) {
  if(!detailed) {
    const list = roster.map(({firstName, id}) => <li key={id}>{firstName}</li>);
    return <ol>{list}</ol>
  }
  
  const rows = roster.map(({ id, firstName, lastName, location}) => (
   <tr key={id}>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{location}</td>
    </tr>
  ));
  
  return (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Location</th>
      </tr>
    </thead>
      <tbody>{rows}</tbody>
  </table>
  );
}

export default Roster;
