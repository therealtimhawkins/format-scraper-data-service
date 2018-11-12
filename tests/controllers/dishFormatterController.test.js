const dishFormatter = require('../../src/controllers/dishFormatController');
const restaurantMock = require('../mocks/restaurantMock');

describe('dishFormatter', () => {
  describe('run()', () => {
    it('should return the outcome of loopDishes()', () => {
      const result = dishFormatter.run(restaurantMock);
      expect(result[0]).toEqual({
        "description": "Onions, spinach, fresh tomatoes & black olives", 
        "name": "Vegetarian Deluxe", 
        "price": "£11.99"
      });
    });
  });

  describe('loopDishes()', () => {
    it('should loop through dishes()', () => {
      const result = dishFormatter.loopDishes(restaurantMock.data.dishes);
      expect(result[0]).toEqual({
        "description": "Onions, spinach, fresh tomatoes & black olives", 
        "name": "Vegetarian Deluxe", 
        "price": "£11.99"
      });
    });
  });

  describe('stringContainsMeat()', () => {
    it('should return true if a string contains a word containing meat', () => {
      expect(dishFormatter.stringContainsMeat('The chicken sat in the coop.')).toEqual(true);
    });
    
    it('should return false if a string does not contain a word containing meat', () => {
      expect(dishFormatter.stringContainsMeat('The salad sat in the coop')).toEqual(false);
    });

    it('should return false if null is passed', () => {
      expect(dishFormatter.stringContainsMeat(null)).toEqual(false);
    });
  });

  describe('stringContainsVeganKeyword()', () => {
    it('should return true if a string contains vegan', () => {
      expect(dishFormatter.stringContainsVeganKeyword('vegan')).toEqual(true);
    });

    it('should return true if a string contains Vegan', () => {
      expect(dishFormatter.stringContainsVeganKeyword('Vegan')).toEqual(true);
    });
  });

  describe('stringToArray()', () => {
    it('should convert given string to array()', () => {
      const expected = ['Testing', 'String', 'To', 'Array'];
      const actual = dishFormatter.stringToArray('Testing String To Array');
      expect(expected).toEqual(actual);
    });

    it('returns null if given string is null', () => {
      const expected = null;
      const actual = dishFormatter.stringToArray(null);
      expect(expected).toEqual(actual);
    });
  });
});