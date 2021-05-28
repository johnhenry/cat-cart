import { useContext } from "react";
import CartContext from "./CartContext.js";

import { makeRemoveFromCart } from "../util/update-cart.js";

const CatCart = () => {
  const { cart, updateCart } = useContext(CartContext);
  const rendered = [];
  for (const { id, name, image, price } of cart) {
    rendered.push(
      <div className="cat" key={id}>
        <img src={image} alt={`cat pic ${name}`}></img>
        <span className="title">
          {name} <br />(
          <span className="price">{Number(price).toFixed(2)}</span>)
        </span>
        <button
          className="close-button"
          title="remove from cart"
          onClick={makeRemoveFromCart(updateCart, id)}
        />
      </div>
    );
  }
  const total = cart.reduce((prev, { price }) => prev + Number(price), 0);
  return (
    <>
      <div className="total">
        <span className="price">{total.toFixed(2)}</span>
      </div>
      <div className="cat-cart">{rendered}</div>
    </>
  );
};

export default CatCart;
