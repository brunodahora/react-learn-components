import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleDayNight } from "../store/actions/AppActions";
import { isNightSelector } from "../store/selectors/AppSelectors";

import PropTypes from "prop-types";

import Image from "../day-and-night.png";

const ButtonTogglePeriod = ({ onChangeEvent }) => {
  const dispatch = useDispatch();
  const isNight = useSelector(isNightSelector);
  const pos = isNight ? "active" : "";
  const onChange = () => dispatch(toggleDayNight());
  return (
    <button onClick={onChange} className={"toggle-button floating " + pos}>
      <img src={Image} alt="Toggle day/night" width="32" height="32" />
    </button>
  );
};
ButtonTogglePeriod.propTypes = {
  onChangeEvent: PropTypes.func,
};

export default ButtonTogglePeriod;
