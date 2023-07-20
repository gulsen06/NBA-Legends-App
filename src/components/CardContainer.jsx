import data from "../helper/data";
import { useState } from "react";

import PlayerCard from "./PlayerCard";
const CardContainer = () => {
  const [oyuncuAra, setOyuncuAra] = useState("");
  const bulGetir = (e) => {
    setOyuncuAra(e.target.value);
  };
  const filteredData = data.filter((card) =>
    card.name.toLowerCase().includes(oyuncuAra.toLowerCase())
  );

  console.log(data);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <input
          value={oyuncuAra}
          type="text"
          onChange={bulGetir}
          className="form-control w-50"
          placeholder="Arama yapın"
        />
      </div>
      <div className="container mt-4">
        <div className="row justify-content-center">
          {filteredData.map((card) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3 mt-2 mb-4"
              key={card.name}
            >
              <PlayerCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
