import React, { useState } from "react";

function App() {
  //console.log(time);

  setInterval(getTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [TIME, setTime] = useState(now);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

 

  return (
    <div className="container">
      <div>
        <h1>{TIME}</h1>
      </div>

      <button onClick={getTime}> Current Time </button>
    </div>
  );
}

export default App;
