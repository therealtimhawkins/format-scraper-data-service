const dishFormatter = require('../src/controllers/dishFormatController');
const restaurantMock = require('./mocks/restaurantMock');

describe('dishFormatter', () => {
  describe('run()', () => {
    it('should return the outcome of loopDishes()', () => {
    });
  });

  describe('loopDishes()', () => {
    it('should loop through dishes()', () => {
      const result = dishFormatter.loopDishes(restaurantMock.data.dishes);
      expect(result[0]).toEqual({ 
        name: [ 'American', 'Hot' ],
        description:
        [ 'Pepperoni,',
          'jalapeno',
          'peppers,',
          'onions',
          '&',
          'mixed',
          'peppers' ],
        price: '£11.99' 
      });
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