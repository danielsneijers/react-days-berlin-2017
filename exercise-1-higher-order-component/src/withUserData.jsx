import React from 'react';
import store from './store';

// to get the data: store.getState()
// {
//   firstName: 'Daniel',
//   lastName: 'Sneijers',
//   talk: 'Scale your React for your first million users',
// }

function withUserData(WrappedComponent) {
  return class extends React.Component {
    render() {
      const state = store.getState();
      return <WrappedComponent firstName={state.firstName} />;
    }
  };
}

export default withUserData;
