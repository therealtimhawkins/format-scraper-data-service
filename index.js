const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const restaurantFormatter = require('./src/controllers/restaurantFormatController');

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.get('/', async (req, res) => {
  restaurantFormatter.run();
  res.send('format-scraper-data-service running...');
});