import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import lampOff from './assets/lamp-off.jpg';
import lampOn from './assets/lamp-on.jpg';
import './index.css';
import { Switch } from '@mui/material';

function Lamp() {
  const [isOn, setIsOn] = useState(true);

  function handleClick() {
    if (isOn) {
      setIsOn(false);
    } else{
      setIsOn(true);
    }
  }

  return(
    <div>
      <img src={isOn ? lampOn : lampOff} alt={isOn ? 'Lâmpada acesa' : 'Lâmpada apagada'} 
      />
      <Switch onClick={handleClick}>
        {isOn ? 'Desligar' : 'Ligar'}
      </Switch>
    </div>
  );
}

export default Lamp;