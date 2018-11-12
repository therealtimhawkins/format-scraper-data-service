const scraperDataService = require('../apiControllers/scraperDataServiceApi');
const restaurantDataService = require('../apiControllers/restaurantDataServiceApi');
const dishFormatter = require('./dishFormatController');

run = async () => {
  const ids = await scraperDataService.getRestaurantIds();
  var progressCounter = progressSetup(ids.data);
  loopIds(ids, progressCounter);
};

loopIds = async (ids, progressCounter) => {
  ids.data.forEach( async (id) => {
    const scraperApiResult = await scraperDataService.getRestaurantById(id);
    const meatFreeDishes = removeMeatDishes(scraperApiResult);
    scraperApiResult.data.dishes = meatFreeDishes;
    progressCounter = progressTracker(progressCounter);
    const restaurantApiResult = await restaurantDataService.postMeatFreeRestaurant(scraperApiResult.data);
    console.log(restaurantApiResult);
  });
};

removeMeatDishes = (restaurantData) => {
  const restaurant = dishFormatter.run(restaurantData);
  return restaurant;
};

progressSetup = (ids) => {
  progressCounter = ids.length;
  console.log(`\n${progressCounter} Restaurants have been found!\n`);
  return progressCounter;
};

progressTracker = (progressCounter) => {
  progressCounter -= 1;
  console.log(`${progressCounter} restaurents left to format!`);
  return progressCounter;
};

module.exports = {
  run,
  removeMeatDishes,
  progressSetup,
  progressTracker,
};