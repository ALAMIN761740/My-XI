import { useEffect, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";


function App() {
  const [toggle, setToggle] = useState(true);


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



      <div className="max-w-300 mx-auto justify-between items-center flex ">
        <h1 className="text-2xl font-bold text-center ">{toggle ? "Available Players" : "Selected Players"}</h1>

        <div className="flex font-bold">   
          <button onClick={() => setToggle(true)} className={`py-3 px-4 border border-gray-400 rounded-l-2xl border-r-0 ${toggle ? 'bg-[#E7FE29]' : ''}`}>Available Players</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0 ${!toggle ? 'bg-[#E7FE29]' : ''}`}>Selected Players <span>{0}</span></button>
        </div>
      </div>
      
      {
        toggle === true ? (
          loading ? (
            <div className="text-center py-10"><span className="loading loading-spinner text-info"></span></div>
          ) : (
            <AvailablePlayers availablePlayers={availablePlayers} />
          )
        ) : (
          <SelectedPlayers />
        )
      }



     



      
    </>
  );
}

export default App;