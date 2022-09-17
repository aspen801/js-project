const makeCart = () => {
  const obj = {
    items: [],
    // {goodProperties: {name: 'car', price: 10}, count: 4}
    addItem: (good, count = 1) => {
      if (Object.values(obj.items.map((item) => item.goodProperties.name)).includes(good.name)) {
        obj.items.map((item) => {
          if (item.goodProperties.name === good.name) {
            item.count += count;
          }
        });
      } else obj.items.push({ goodProperties: good, count });
    },
    getItems: () => obj.items,
    getCost: () => {
      const sum = obj.items.reduce((accumulator, item) => {
        accumulator += item.goodProperties.price * item.count;
        return accumulator;
      }, 0);

      return sum;
    },
    getCount: () => {
        const countSum = obj.items.reduce((accumulator, item) => {
            accumulator += item.count
            return accumulator;
          }, 0);

        return countSum;
    }

  };
  return obj;
};

export default makeCart;

/*
const good1 = { name: 'house', price: 10 };
const good2 = { name: 'car', price: 15 };

const cart = makeCart();
cart.addItem(good1, 2);
cart.addItem(good2, 3);
cart.addItem(good1, 2);

console.log(cart.getItems());
console.log(cart.getCost());
console.log(cart.getCount());
*/