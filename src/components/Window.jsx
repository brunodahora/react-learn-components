import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { isNightSelector } from "../store/selectors/AppSelectors";

const Window = ({ closed }) => {
  const isNight = useSelector(isNightSelector);
  let classState = "window";
  if (closed) classState += " closed";

  if (isNight) classState += " light-on";

  return <div className={classState}></div>;
};
Window.propTypes = {
  closed: PropTypes.bool,
};

export default Window;
