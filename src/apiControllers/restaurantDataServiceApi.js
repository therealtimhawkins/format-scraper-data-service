const axios = require('axios');
const config = require('config')
const url = config.get('restaurantDataServiceApiUrl');

postMeatFreeRestaurant = async (restaurant) => {
  const result = await axios.post(`${url}/`, restaurant);
  return result;
};

module.exports = {
  postMeatFreeRestaurant,
};