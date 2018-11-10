const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const ids = require('./src/findRestaurantIds');

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.get('/', (req, res) => {
  ids.getRestaurantIds();
  res.send('format-scraper-data-service running...');
});