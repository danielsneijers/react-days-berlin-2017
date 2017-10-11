/* eslint-disable react/forbid-prop-types, react/require-default-props */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { object } from 'prop-types';

@inject('counterStore')
@observer
class App extends Component {
  render() {
    const {
      counterWithDecimals,
      counter,
      increaseCounter,
      toggleDecimals,
      withDecimals,
    } = this.props.counterStore;
    const value = withDecimals ? counterWithDecimals : counter;

    return (
      <div>
        <h1>Counter: {value}</h1>
        <button onClick={increaseCounter}>Increase!</button>
        <button onClick={toggleDecimals}>Toggle decimals</button>
      </div>
    );
  }
}

App.propTypes = {
  counterStore: object,
};

export default App;
