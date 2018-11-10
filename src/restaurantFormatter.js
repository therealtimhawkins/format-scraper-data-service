const scraperDataService = require('./apiControllers/scraperDataServiceApi');

run = async () => {
  let ids = await scraperDataService.getRestaurantIds();
  console.log(ids);
}

module.exports = {
  run,
}