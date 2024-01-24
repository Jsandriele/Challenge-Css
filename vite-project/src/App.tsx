import { useState } from "react";
import "./App.css";
import warning from "./picture/warning.png";

function App() {

  const[visivel, setVisivel] = useState(true)

  const handelVisivel = () => {
  setVisivel(false)
}


  return (
    <>
    {visivel && (
      <div className="box">
        
          <img src={warning} alt="alert" />
        
        <div className="box_alert">
          <p id="titulo">Oh snap!</p>
          <p  id="paraf">An error has occured while creating an error report.</p>
        </div>
        <button type="button" onClick={handelVisivel}>Dismiss</button>
      </div>
      )}
    </>
  );
}

export default App;
