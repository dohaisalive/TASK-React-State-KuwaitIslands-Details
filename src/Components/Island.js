//import React, { useState } from "react";

export default function Island({ island, setIsland }) {
  return (
    <div className="Island" onClick={() => setIsland(island)}>
      <h3>{island.name}</h3>
      <p>Visitors: {island.visitors}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
