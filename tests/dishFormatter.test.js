const dishFormatter = require('../src/controllers/dishFormatController');
const restaurantMock = require('./mocks/restaurantMock');

describe('dishFormatter', () => {
  describe('run()', () => {
    it('should return the outcome of loopDishes()', () => {
    });
  });

  describe('loopDishes()', () => {
    it('should loop through dishes()', () => {

    });
  });

  describe('stringToArray()', () => {
    it('should convert given string to array()', () => {
      const expected = ['Testing', 'String', 'To', 'Array'];
      const actual = dishFormatter.stringToArray('Testing String To Array');
      expect(expected).toEqual(actual);
    });
  });
});