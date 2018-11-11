run = (restaurant) => {
  loopDishes(restaurant.data.dishes);
};

loopDishes = (dishes) => {
  dishes.forEach( async (dish) => {
    nameFieldToArray(dish.name);
  });
};

nameFieldToArray = (name) => {
  const nameArray = name.split(" ");
  console.log(nameArray);
  return nameArray;
};

module.exports = {
  run,
};