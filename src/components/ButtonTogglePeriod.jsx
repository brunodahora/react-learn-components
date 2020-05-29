import React from "react";
import { useRecoilState } from "recoil";
import isNightState from "../state/isNight";

import Image from "../day-and-night.png";

const ButtonTogglePeriod = () => {
  const [isNight, setIsNight] = useRecoilState(isNightState);
  const onChange = () => setIsNight(!isNight);
  const pos = isNight ? "active" : "";
  return (
    <button onClick={onChange} className={"toggle-button floating " + pos}>
      <img src={Image} alt="Toggle day/night" width="32" height="32" />
    </button>
  );
};

export default ButtonTogglePeriod;
