const axios = require('axios');
const config = require('config')

getRestaurantIds = async () => {
  const url = config.get('scraperDataServiceApiUrl');
  const result = await axios.get(url);
  return result;
};

module.exports = {
  getRestaurantIds,
};