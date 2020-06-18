import React from "react";
import { useSelector } from "react-redux";

import { isNightSelector } from "../store/selectors/AppSelectors";
import Tower from "./Tower";
import ButtonTogglePeriod from "./ButtonTogglePeriod";

const Scenery = () => {
  const isNight = useSelector(isNightSelector);
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
