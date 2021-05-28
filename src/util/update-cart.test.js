import { makeAddToCart, makeRemoveFromCart } from "./update-cart.js";

let cart;
const updateCart = (func) => {
  cart = func(cart);
};

test("makeAddToCart should create a function that appends to an array via updateCart function", () => {
  cart = [];
  let originalCart = cart;
  const handler = makeAddToCart(updateCart, { id: 1 });
  handler();
  expect(cart).toEqual([{ id: 1 }]);
  expect(originalCart).not.toBe(cart);
});

test("makeRemoveFromCart should create a function that removes from an array via updateCart function", () => {
  cart = [{ id: 1 }];
  let originalCart = cart;
  const handler = makeRemoveFromCart(updateCart, 1);
  handler();
  expect(cart).toEqual([]);
  expect(originalCart).not.toBe(cart);
});
