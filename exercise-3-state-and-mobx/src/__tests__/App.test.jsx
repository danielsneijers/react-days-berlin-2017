import React from 'react';
import { mount, shallow } from 'enzyme';
import CounterStore from '../store';
import App from '../App';

describe('<App />', () => {
  let store;

  beforeEach(() => {
    store = new CounterStore();
  });

  it('renders correctly', () => {
    const tree = mount(<App counterStore={store} />);

    expect(tree).toMatchSnapshot();
  });

  it('increases the counter on button clicks', () => {
    const tree = mount(<App counterStore={store} />);
    const header = tree.find('h1');
    const increaseButton = tree.find('button').at(0);

    expect(header.text()).toBe('Counter: 0');

    increaseButton.simulate('click');
    expect(header.text()).toBe('Counter: 1');

    increaseButton.simulate('click');
    expect(header.text()).toBe('Counter: 2');
  });

  it('toggles decimals on button clicks', () => {
    const tree = mount(<App counterStore={store} />);
    const header = tree.find('h1');
    const toggleButton = tree.find('button').at(1);

    expect(header.text()).toBe('Counter: 0');

    toggleButton.simulate('click');
    expect(header.text()).toBe('Counter: 0.00');

    toggleButton.simulate('click');
    expect(header.text()).toBe('Counter: 0');
  });

  it('does not contain internal state', () => {
    const tree = shallow(<App counterStore={store} />);

    expect(tree.shallow().state()).toEqual({});
  });
});
