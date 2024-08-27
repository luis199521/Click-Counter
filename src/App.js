import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from "./images/FreeCodeCamp_logo.png";
//Hook
import { useState } from 'react';

function App() {

       //state      function to update state  returned value by hook
  const [numClicks, setNumClicks] = useState(0);

  const click = () => {
   setNumClicks ( numClicks + 1);
  };

  const reset = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
        className="freecodecamp-logo"
        src={freeCodeCampLogo}
        alt="freecodecamp logo"
        />
      </div>
      <div className="main-container">

        <Counter clicksNumber = {numClicks} />

        <Button 
        text = "Click"
        clickButton = {true}
        clickHandler = {click}/>
       

        <Button 
        text = "Reset"
        clickButton = {false}
        clickHandler = {reset}
        />

      </div>
      
    </div>
  );
}

export default App;
