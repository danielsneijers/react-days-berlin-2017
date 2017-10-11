/* eslint-disable react/forbid-prop-types, react/require-default-props */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { object } from 'prop-types';

@inject('counterStore')
@observer
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { withDecimals: false };
  }

  toggleDecimals = () => {
    this.setState({ withDecimals: !this.state.withDecimals });
  };

  render() {
    const { counterWithDecimals, counter, increaseCounter } = this.props.counterStore;
    const value = this.state.withDecimals ? counterWithDecimals : counter;

    return (
      <div>
        <h1>Counter: {value}</h1>
        <button onClick={increaseCounter}>Increase!</button>
        <button onClick={this.toggleDecimals}>Toggle decimals</button>
      </div>
    );
  }
}

App.propTypes = {
  counterStore: object,
};

export default App;
