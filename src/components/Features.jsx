import { FaPeopleGroup } from 'react-icons/fa6';
import { BiHappyHeartEyes, BiHomeAlt2 } from 'react-icons/bi';
import { GiGraveFlowers } from 'react-icons/gi';

const Features = () => {
  return (
    <div className="py-10 bg-neutral bg-opacity-70 text-white ">
      <h1 className="text-center py-8 text-5xl font-semibold">
        Spacial Features!
      </h1>
      <div className="grid grid-cols-4 gap-2 px-2 mt-8">
        {/* card-1 */}
        <div className="card shadow-xl">
          <figure >
            <FaPeopleGroup  size={100}/>
          </figure>
          <div className="card-body items-center text-justify">
            <h2 className="card-title">Friendly Team</h2>
            <p>A harmonious group of individuals who collaborate, support, and communicate openly, fostering a welcoming atmosphere and productive relationships.</p>
          </div>
        </div>
        {/* card-2 */}
        <div className="card shadow-xl">
          <figure>
            <BiHomeAlt2 size={100}/>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Perfect Venues</h2>
            <p>Ideal spaces for memorable events, offering exquisite ambiance, amenities, and location, ensuring your special occasion is truly exceptional</p>
          </div>
        </div>
        {/* card-3 */}
        <div className="card shadow-xl">
          <figure>
          <GiGraveFlowers size={100}/>  
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Unique Scenarios</h2>
            <p>Unique scenarios present rare and unconventional situations, offering opportunities for creative problem-solving and novel experiences.</p>
          </div>
        </div>
        {/* card-4 */}
        <div className="card shadow-xl">
          <figure>
          <BiHappyHeartEyes size={100}/>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Unforgettable Time</h2>
            <p>Cherished moments etched in our hearts, a tapestry of memories that warm the soul and endure through a lifetime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
