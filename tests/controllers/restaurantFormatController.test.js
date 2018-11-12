const restaurantFormatController = require('../../src/controllers/restaurantFormatController');
const dishFormatter = require('../../src/controllers/dishFormatController');

describe('restaurantFormatController', () => {
  describe('run()', () => {
  });

  describe('progressSetup()', () => {
    it('should take one from the progressCounter', () => {
      expect(restaurantFormatController.progressSetup([1, 2, 3, 4, 5])).toEqual(5);
    });
  });

  describe('progressTracker()', () => {
    it('should take one from the progressCounter', () => {
      expect(restaurantFormatController.progressTracker(5)).toEqual(4);
    });
  });
});