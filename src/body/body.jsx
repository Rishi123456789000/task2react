
import React, { useState } from 'react';

const Bulb = () => {
  const [isOn, setIsOn] = useState(true);
  const bulbOn = 'https://i.pinimg.com/236x/da/fd/48/dafd487726596ed2a59f30b07f722373.jpg';
  const bulbOff = 'https://i.pinimg.com/236x/d9/b4/51/d9b451219b176b12ade871f7487561f9.jpg';
  const toggleBulb = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div>
      <img src={isOn ? bulbOn : bulbOff} alt="Bulb" />
      <button onClick={toggleBulb}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

export default Bulb;