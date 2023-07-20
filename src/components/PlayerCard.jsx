import React, { useState } from "react";

const PlayerCard = ({ name, img, statistics }) => {
  const [gorunen, setGorenen] = useState(true);
  const handleTikla = () => {
    setGorenen(!gorunen);
  };

  return (
    <div
      className="card border border-2 border-danger  h-100"
      onClick={handleTikla}
    >
      {gorunen ? (
        <img src={img} className="card-img-top w-100 h-100" alt="nba" />
      ) : (
        <ul className=" d-flex row fs-4 list-unstyled text-left pt-4 ps-5 mt-5">
          {statistics.map((istatislik, index) => {
            return <li key={index}>🏀{istatislik}</li>;
          })}
        </ul>
      )}

      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
      </div>
    </div>
  );
};

export default PlayerCard;
