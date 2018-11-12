const scraperDataServiceApi = require('../../src/apiControllers/scraperDataServiceApi');
const moxios = require('moxios');
const axios = require('axios');

describe('scraperDataServiceApi', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  describe('getRestaurantIds()', () => {
    it('should make a request to the api url for restaurant ids', async () => {
      moxios.stubRequest('http://test-scraper-data-service.com/api/restaurants/ids', {
        status: 200,
        responseText: 'getRestaurantIds returning correct data'
      });
       const result = await scraperDataServiceApi.getRestaurantIds();
       expect(result.data).toEqual('getRestaurantIds returning correct data');
    });
  });

  describe('getRestaurantById()', () => {
    it('should make a request to the api url for restaurant by its id', async () => {
      const testId = 13245678
      moxios.stubRequest(`http://test-scraper-data-service.com/api/restaurants/id/${testId}`, {
        status: 200,
        responseText: 'getRestaurantById returning correct data'
      });
       const result = await scraperDataServiceApi.getRestaurantById(testId);
       expect(result.data).toEqual('getRestaurantById returning correct data');
    });
  });
});