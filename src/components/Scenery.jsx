import React from "react";
import { useRecoilValue } from "recoil";
import Tower from "./Tower";
import ButtonTogglePeriod from "./ButtonTogglePeriod";
import isNightState from "../state/isNight";

const Scenery = () => {
  const isNight = useRecoilValue(isNightState);
  const sceneryClass = isNight ? "scenery is-night" : "scenery";
  return (
    <div className={sceneryClass}>
      <div className="container">
        <ButtonTogglePeriod />
        <Tower />
      </div>
      <div className="ground"></div>
    </div>
  );
};

export default Scenery;
