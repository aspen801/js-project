import makeCart  from '../functions/cart.js'

test('cart', () => {
    const cart = makeCart();
    cart.addItem({ name: 'car', price: 3 }, 5);
    cart.addItem({ name: 'house', price: 10 }, 2);
    expect(cart.items[0]).toStrictEqual({goodProperties: {name: 'car', price: 3}, count: 5});
    expect(cart.items[1]).toStrictEqual({goodProperties: {name: 'house', price: 10}, count: 2});
    expect(cart.items.length).toEqual(2);
    expect(cart.getCount()).toEqual(7);
    expect(cart.getCost()).toEqual(35);
    cart.addItem({ name: 'house', price: 10 }, 2);
    expect(cart.items[1]).toStrictEqual({goodProperties: {name: 'house', price: 10}, count: 4});
    expect(cart.items.length).toEqual(2);
    expect(cart.getCount()).toEqual(9);
    expect(cart.getCost()).toEqual(55); 
    expect(cart.getItems()).toStrictEqual(cart.items);
});

