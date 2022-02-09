import React from "react";

function Achar(props) {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/1?set=set${props.monster.id}&size=180x180`}
        alt="monsters"
      />
      <h1>{props.monster.name} </h1>
      <p>{props.monster.email}</p>
    </div>
  );
}

export default Achar;
