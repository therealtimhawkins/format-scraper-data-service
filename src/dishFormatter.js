run = (restaurant) => {
  loopDishes(restaurant.data.dishes);
};

loopDishes = (dishes) => {
  dishes.forEach( async (dish) => {
    dish.name = stringToArray(dish.name);
    dish.description = stringToArray(dish.description);
  });
  return dishes;
};

stringToArray = (string) => {
  if (string) {
    const array = string.split(" ");
    return array;
  }
  return null;
};

module.exports = {
  run,
};