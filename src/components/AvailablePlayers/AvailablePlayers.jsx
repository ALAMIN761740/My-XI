import userImg from '../../assets/user-1.png';
import flagImg from '../../assets/report-1.png';



const AvailablePlayers = ({ availablePlayers }) => {

  if (!availablePlayers || availablePlayers.length === 0) {
    return (
      <div className="text-center py-10">
        No Players Found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-300 mx-auto">
      {availablePlayers.map((player) => (
        <div key={player.id} className="card p-4 bg-base-100 w-96 shadow-sm">
          <figure>
            <img className="h-64 w-full object-cover"
              src={player.image}
              alt={player.name} />
          </figure>
          <div className="mt-4">

            <div className='flex'>
              <img src={userImg} alt="User" className="w-6 h-6 rounded-full" />
              <h2 className="ml-2 font-bold">{player.name}</h2>
            </div>

            <div className='flex justify-between mt-2 mb-2'>
              <div className='flex items-center'>
                <img src={flagImg} alt="Flag" className="w-4 h-4 inline-block " />
                <h2 className="ml-2 font-bold">{player.country}</h2>
              </div>
              <button className="btn btn-sm btn-outline">{player.role}</button>
            </div>

            <div>
              <div className='flex justify-between mt-2 mb-2'>
                <h2>Rating</h2>
                <h2>{player.rating}</h2>
              </div>
              <div className='flex justify-between font-bold mt-2 mb-2'>
                <h2 className='outline p-1'>{player.battingStyle}</h2>
                <h2 className='outline p-1'>{player.bowlingStyle}</h2>
              </div>
              <div className='flex justify-between mt-2 mb-2'>
                <h2>${player.price}</h2>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
            




            <div className="card-actions justify-end">
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;