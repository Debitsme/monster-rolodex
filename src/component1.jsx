import React from "react";
import Achar from "./card-list";

function Alop(props) {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Achar key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default Alop;
