import React from "react";
import Card from "../Card/Card";
import "./Main.css";

const Main = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Main;