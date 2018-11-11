const scraperDataService = require('../apiControllers/scraperDataServiceApi')
const dishFormatter = require('./dishFormatController');
var progressCounter = 0;

run = async () => {
  const ids = await scraperDataService.getRestaurantIds();
  progressSetup(ids);
  loopIds(ids);
};

loopIds = async (ids) => {
  ids.data.forEach( async (id) => {
    const result = await scraperDataService.getRestaurantById(id);
    removeMeatDishes(result);
    progressTracker();
  });
};

removeMeatDishes = (restaurantData) => {
  const data = dishFormatter.run(restaurantData);
};

progressSetup = (ids) => {
  progressCounter = ids.data.length;
  console.log(`\n${progressCounter} Restaurants have been found!\n`);
}

progressTracker = () => {
  progressCounter -= 1;
  console.log(`${progressCounter} restaurents left to format!`);
};

module.exports = {
  run,
};