import React from 'react';
import Tower from './Tower';
import ButtonTogglePeriod from './ButtonTogglePeriod';

export default class Scenery extends React.Component {
  state = {
    isNight: false
  }

  changeSceneryState() {
    this.setState({isNight: !this.state.isNight});
  }

  render() {
    const sceneryClass = (this.state.isNight) ? "scenery is-night" : "scenery";
    return(
      <div className={sceneryClass}>
        <div className="container">
          <ButtonTogglePeriod
            onChangeEvent={ this.changeSceneryState.bind(this) } />
          <Tower isNight={ this.state.isNight } />
        </div>
        <div className="ground"></div>
      </div>
    )
  }
}
