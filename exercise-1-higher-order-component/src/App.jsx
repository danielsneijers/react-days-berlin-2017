import React from 'react';
import { string } from 'prop-types';
import withUserData from './withUserData';

const App = ({ firstName = 'no name provided 😔' }) => <h1>Hello {firstName}</h1>;

App.propTypes = {
  firstName: string.isRequired,
};

// Look, higher order components!
export default withUserData(App);
