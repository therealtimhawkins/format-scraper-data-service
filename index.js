const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const scraperDataService = require('./src/apiControllers/scraperDataServiceApi');

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.get('/', async (req, res) => {
  let ids = await scraperDataService.getRestaurantIds();
  console.log(ids);
  res.send('format-scraper-data-service running...');
});