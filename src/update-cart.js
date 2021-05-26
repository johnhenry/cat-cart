const finder =
  (id) =>
  ({ id: id_ }) =>
    id === id_;

export const makeAddToCart =
  (updateCart, candidate, setModal, MAX = 3) =>
  () =>
    updateCart((cart) => {
      if (cart.find(finder(candidate.id))) {
        setModal(2);
        return cart;
      }
      if (cart.length >= MAX) {
        setModal(3);
        return cart;
      }
      return [...cart, candidate];
    });

export const makeRemoveFromCart = (updateCart, id) => () =>
  updateCart((cart) => {
    const index = cart.findIndex(finder(id));
    if (index > -1) {
      const removed = [...cart];
      removed.splice(index, 1);
      return removed;
    }
    return cart;
  });
