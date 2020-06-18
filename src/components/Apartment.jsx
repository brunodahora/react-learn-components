import React, { useState } from "react";
import Window from "./Window";

const Apartment = () => {
  const [isWindowsClosed, setWindowClosed] = useState();
  const toggleWindowClosed = () => setWindowClosed(!isWindowsClosed);
  return (
    <div className="apartment" onClick={toggleWindowClosed}>
      <Window closed={isWindowsClosed} />
      <Window closed={isWindowsClosed} />
    </div>
  );
};

export default Apartment;
