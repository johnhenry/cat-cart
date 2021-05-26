import { useContext } from "react";
import CartContext from "./CartContext.js";
import { makeRemoveFromCart } from "./update-cart.js";

const CatCart = () => {
  const { cart, updateCart } = useContext(CartContext);
  const rendered = [];
  for (const { id, name, image, price } of cart) {
    rendered.push(
      <div className="cat" key={id}>
        <span className="title">{name}</span>
        <span className="price">{price}</span>
        <img src={image} alt={`cat pic ${name}`}></img>
        <button onClick={makeRemoveFromCart(updateCart, id)}>Remove</button>
      </div>
    );
  }
  const total = cart.reduce((prev, { price }) => prev + Number(price), 0);
  return (
    <>
      <div className="cat-cart">{rendered}</div>
      <div className="total">{total}</div>
    </>
  );
};

export default CatCart;
