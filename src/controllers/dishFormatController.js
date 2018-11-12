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
  'pork,',
  'pork'
]

run = (restaurant) => {
  return loopDishes(restaurant.data.dishes);
};

loopDishes = (dishes) => {
  var meatFreeDishes = []
  dishes.forEach(dish => {
    if (stringContainsVeganKeyword(dish.description) || stringContainsVeganKeyword(dish.name)) {
      dish.vegan = true;
      meatFreeDishes.push(dish);
    } else if (!stringContainsMeat(dish.description) && !stringContainsMeat(dish.name)) {
      meatFreeDishes.push(dish);
    }
  });
  return meatFreeDishes;
};

stringContainsMeat = (string) => {
  if (string) {
    array = stringToArray(string);
    return arrayContainsMeatProduct(array);
  };
  return false;
};

stringContainsVeganKeyword = (string) => {
  if (string) {
    array = stringToArray(string);
    return arrayContainsVeganKeyword(array);
  };
  return false;
}

arrayContainsMeatProduct = (array) => {
  const containsMeatProduct = array.some(element => meatProducts.includes(element.toLowerCase()));
  return containsMeatProduct;
};

arrayContainsVeganKeyword = (array) => {
  const containsVeganKeyword = array.some(element => ['vegan'].includes(element.toLowerCase()));
  return containsVeganKeyword;
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
  stringContainsMeat,
  stringContainsVeganKeyword,
  stringToArray,
};