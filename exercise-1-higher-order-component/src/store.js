class Store {
  constructor() {
    this.state = {
      firstName: 'Daniel',
      lastName: 'Sneijers',
      talk: 'Scale your React for your first million users',
    };

    this.getState = this.getState.bind(this);
  }

  getState() {
    return this.state;
  }
}

export default new Store();
