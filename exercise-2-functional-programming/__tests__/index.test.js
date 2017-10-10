import NumberSet from '../index';

describe('functional programming', () => {
  describe('pure functions', () => {
    let numberSet;

    beforeEach(() => {
      numberSet = new NumberSet();
    });

    it('always return the same output with the same input', () => {
      expect(numberSet.getFirstHalf()).toEqual([33, 7, 12]);
      expect(numberSet.getFirstHalf()).toEqual([33, 7, 12]);
      expect(numberSet.getFirstHalf()).toEqual([33, 7, 12]);
    });

    it("doesn't mutate existing data", () => {
      expect(numberSet.getSortedNumbers()).toEqual([1, 7, 12, 28, 33, 488]);
      expect(numberSet.numbers).toEqual([33, 7, 12, 1, 488, 28]);
    });
  });
});
