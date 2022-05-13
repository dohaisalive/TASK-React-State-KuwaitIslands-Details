import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islands from "./Components/islands";

function App() {
  const [islandState, setislandstate] = useState(islands);

  const [island, setIsland] = useState({
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
  });

  const incVisitors = (id) => {
    let newisland = islands.find((island) => island.id === id);
    newisland.visitors = island.visitors + 1;
    setIsland(newisland);
  };

  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} islands={islandState} />
        <IslandForm island={island} incVisitors={incVisitors} />
      </div>
    </div>
  );
}

export default App;
