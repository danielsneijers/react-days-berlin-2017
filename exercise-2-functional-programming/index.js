export default class NumberSet {
  constructor() {
    this.numbers = [33, 7, 12, 1, 488, 28];

    this.getFirstHalf = this.getFirstHalf.bind(this);
  }

  getFirstHalf() {
    return this.numbers.splice(0, 3);
  }

  getSortedNumbers() {
    return this.numbers.sort((a, b) => a - b);
  }
}
