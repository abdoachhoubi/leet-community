import React from "react";

function Card({ title, descripion, link }) {
  return (
    <div className="card">
      <h1 className="card_title">{title}</h1>
      <p className="card_description">{descripion}</p>
      <a href={link} className="card_cta">
        LEARN MORE
      </a>
    </div>
  );
}

export default Card;
