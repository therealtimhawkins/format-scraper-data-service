const scraperDataService = require('./apiControllers/scraperDataServiceApi');
var progressCounter = 0;

run = async () => {
  const ids = await scraperDataService.getRestaurantIds();
  progressSetup(ids);
  loopIds(ids);
};

loopIds = async (ids) => {
  ids.data.forEach( async (id, index) => {
    const result = await scraperDataService.getRestaurantById(id);
    progressTracker();
  });
};

removeMeatDishes = () => {

};

progressSetup = (ids) => {
  progressCounter = ids.data.length;
  console.log(`\n${progressCounter} Restaurant Ids have been found!\n`);
}

progressTracker = () => {
  progressCounter -= 1;
  console.log(`${progressCounter} restaurents left to format!`);
};

module.exports = {
  run,
};