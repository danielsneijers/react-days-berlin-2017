import { observable, computed, action } from 'mobx';

class CounterStore {
  @observable counter = 0;

  @computed
  get counterWithDecimals() {
    return this.counter.toFixed(2);
  }

  @action
  increaseCounter = () => {
    this.counter += 1;
  };
}

export default CounterStore;
