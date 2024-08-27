import React from "react";
import "../stylesheets/counter.css"

 function Counter({ clicksNumber })
 {
  return(
    <div className="counter">
      {clicksNumber}

    </div>

  );
 }


export default Counter;