const AvailablePlayers = ({ availablePlayers }) => {

  if (!availablePlayers || availablePlayers.length === 0) {
    return (
      <div className="text-center py-10">
        No Players Found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {availablePlayers.map((player) => (
        <div key={player.id} className="card bg-base-100 shadow p-4">
          <h2>{player.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;