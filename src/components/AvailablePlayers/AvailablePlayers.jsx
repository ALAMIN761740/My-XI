import userImg from '../../assets/user-1.png';
import flagImg from '../../assets/report-1.png';
import unknownImg from '../../assets/unknown-image.png';


const AvailablePlayers = ({ availablePlayers }) => {

  if (!availablePlayers || availablePlayers.length === 0) {
    return (
      <div className="text-center py-10">
        No Players Found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-3 max-w-300 mx-auto py-10">
      {availablePlayers.map((player) => (
        <div key={player.id} className="card p-4 bg-base-100 w-full max-w-sm mx-auto shadow-sm">
          <figure>
              <img
                className="h-64 w-full object-cover"
                src={player.image || unknownImg}
                alt={player.name}
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = unknownImg;
                }}
              />
          </figure>
          <div className="mt-4">

            <div className='flex'>
              <img src={userImg} alt="User" className="w-6 h-6 rounded-full" />
              <h2 className="ml-2 font-bold">{player.name}</h2>
            </div>

            <div className='flex justify-between mt-2 mb-2 border-b-2 pb-4 border-gray-300'>
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
              <div className='flex justify-between  rounded mt-2 mb-2'>
                <button className='btn btn-sm btn-outline font-bold'>{player.battingStyle}</button>
                <button className='btn btn-sm btn-outline'>{player.bowlingStyle}</button>
              </div>
              <div className='flex justify-between mt-2 mb-2 items-center'>
                <h2 className="font-bold text-xl items-center">Price:${player.price}</h2>
                <button className="btn btn-sm btn-outline">Buy Now</button>
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