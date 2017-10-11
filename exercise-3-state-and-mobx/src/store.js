import { observable, computed, action } from 'mobx';

class CounterStore {
  @observable counter = 0;
  @observable withDecimals = false;

  @computed
  get counterWithDecimals() {
    return this.counter.toFixed(2);
  }

  @action
  increaseCounter = () => {
    this.counter += 1;
  };

  @action
  toggleDecimals = () => {
    this.withDecimals = !this.withDecimals;
  };
}

export default CounterStore;
