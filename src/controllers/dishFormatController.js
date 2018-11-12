const meatProducts = [
  'beef,',
  'beef',
  'pepperoni,',
  'pepperoni',
  'chicken',
  'chicken,',
  'lamb,',
  'lamb',
  'ham,',
  'ham',
  'bacon,',
  'bacon',
  'turkey,',
  'turkey',
  'ribs,',
  'ribs',
]


run = (restaurant) => {
  return loopDishes(restaurant.data.dishes);
};

loopDishes = (dishes) => {
  dishes.forEach(dish => {
    const index = dishes.indexOf(dish);
    if (stringContainsMeat(dish.name)) {
      removeItemFromArray(dishes, index);
    }
    if (stringContainsMeat(dish.description)) {
      removeItemFromArray(dishes, index);
    }
  });
  return dishes;
};

stringContainsMeat = (string) => {
  if (string) {
    array = stringToArray(string);
    return arrayContainsMeatProduct(array);
  };
  return false;
};

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

removeItemFromArray = (array, index) => {
  if (index !== -1) array.splice(index, 1);
  return array;
};

module.exports = {
  run,
  loopDishes,
  stringContainsMeat,
  stringToArray,
  removeItemFromArray,
};