import React from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const TitleCards = ({ title }) => {
  return (
    <div className="title-cards">
      <h2>{title ? title : "Today's Topic Picks for You"}</h2>
      <div className="card-list">
        {cards_data.slice(1).map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} state={{ videoSrc: card.videoSrc }} className="card" key={index}>
              <img src={card.image} alt={card.name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
