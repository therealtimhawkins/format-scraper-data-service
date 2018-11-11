const axios = require('axios');
const config = require('config')
const url = config.get('scraperDataServiceApiUrl');

getRestaurantIds = async () => {
  const result = await axios.get(`${url}/ids`);
  return result;
};

getRestaurantById = async (id) => {
  const result = await axios.get(`${url}/id/${id}`);
  return result;
}

module.exports = {
  getRestaurantIds,
  getRestaurantById,
};