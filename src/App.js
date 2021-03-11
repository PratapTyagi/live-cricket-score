import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { getMatches } from "./Api.js";
import MyCard from "./components/MyCard";
import "./App.css";
function App() {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    getMatches()
      .then((data) => setMatches(data.data.matches))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      {matches.map((match) => (
        <>
          {match.type === "Twenty20" ? (
            <MyCard key={match.unique_id} match={match} />
          ) : (
            ""
          )}
        </>
      ))}
    </>
  );
}

export default App;
