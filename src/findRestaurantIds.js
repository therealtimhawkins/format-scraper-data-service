const axios = require('axios');

getRestaurantIds = async () => {
  const url = 'http://scraper-data-service.herokuapp.com/api/restaurants/ids';
  const result = await axios.get(url);
  console.log(result);
};

module.exports = {
  getRestaurantIds,
};