import React from 'react';
import { shallow } from 'enzyme';
import store from '../store';
import withUserData from '../withUserData';

jest.mock('../store');

describe('withUserData', () => {
  it('gets data from the store', () => {
    const Component = () => <h1>Hello</h1>;
    const ComponentWithUserData = withUserData(Component);

    shallow(<ComponentWithUserData />);

    expect(store.getState).toBeCalled();
  });
});
