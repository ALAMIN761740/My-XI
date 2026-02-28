import { useEffect, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

function App() {
  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Players.json")
      .then((res) => res.json())
      .then((data) => {
        setAvailablePlayers(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      {loading ? (
        <div className="text-center py-10"><span className="loading loading-spinner text-info"></span></div>
      ) : (
        <AvailablePlayers availablePlayers={availablePlayers} />
      )}

      <SelectedPlayers />
    </>
  );
}

export default App;