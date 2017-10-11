class Store {
  state = {
    firstName: 'Daniel',
    lastName: 'Sneijers',
    talk: 'Scale your React for your first million users',
  };

  getState = () => this.state;
}

export default new Store();
