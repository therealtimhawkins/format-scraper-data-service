const scraperDataService = require('./apiControllers/scraperDataServiceApi');

run = async () => {
  let ids = await scraperDataService.getRestaurantIds();
  loopIds(ids);

}

loopIds = (ids) => {
  ids.data.forEach((id, index) => {
    console.log(`Id number ${index} is ${id}`)
  });
}

module.exports = {
  run,
}