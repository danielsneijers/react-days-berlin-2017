import React from 'react';
import { shallow } from 'enzyme';
import store from '../store';
import App from '../App';

jest.mock('../store');

describe('<App />', () => {
  it('should receive the firstName from the store', () => {
    const tree = shallow(<App />);
    const state = store.getState();

    expect(tree.prop('firstName')).toBe(state.firstName);
  });
});
