import React from "react";
import { useRecoilValue } from "recoil";
import Apartment from "./Apartment";
import isNightState from "../state/isNight";

const Tower = () => {
  const isNight = useRecoilValue(isNightState);
  return (
    <div className="tower">
      <div className="watter-supply"></div>
      <Apartment isNight={isNight} />
      <Apartment isNight={isNight} />
      <Apartment isNight={isNight} />
      <Apartment isNight={isNight} />
      <Apartment isNight={isNight} />
    </div>
  );
};

export default Tower;
