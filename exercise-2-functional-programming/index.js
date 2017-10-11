export default class NumberSet {
  numbers = [33, 7, 12, 1, 488, 28];

  getFirstHalf = () => this.numbers.splice(0, 3);

  getSortedNumbers = () => this.numbers.sort((a, b) => a - b);
}
