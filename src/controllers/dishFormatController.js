const meatProducts = [
  'beef,',
  'beef',
  'pepperoni,',
  'pepperoni',
  'chicken',
  'chicken,',
  'ham,',
  'ham',
  'bacon,',
  'bacon',
  'turkey,',
  'turkey',
]


run = (restaurant) => {
  return loopDishes(restaurant.data.dishes);
};

loopDishes = (dishes) => {
  dishes.forEach(dish => {
    checkDishNameForMeat(dish);
    checkDishDescriptionForMeat(dish);
  });
  return dishes;
};

checkDishNameForMeat = (dish) => {
  dish.name = stringToArray(dish.name);
  if (dish.name) {
    if (arrayContainsMeatProduct(dish.name)) {
      console.log(dish.name);
    };
  };
};

checkDishDescriptionForMeat = (dish) => {
  dish.description = stringToArray(dish.description);
  if (dish.description) {
    if (arrayContainsMeatProduct(dish.description)) {
      console.log(dish.description);
    };
  };
}

arrayContainsMeatProduct = (array) => {
  const containsMeatProduct = array.some(element => meatProducts.includes(element.toLowerCase()));
  return containsMeatProduct;
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
  loopDishes,
  stringToArray,
};