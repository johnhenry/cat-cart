import { useContext } from "react";
import CartContext from "./CartContext.js";
import { makeAddToCart } from "./update-cart.js";

import formatter from "./currency-formatter.mjs";

const CatList = () => {
  const { cats, updateCart, setModal } = useContext(CartContext);
  const rendered = [];
  for (const cat of cats) {
    const { id, name, image, price } = cat;
    rendered.push(
      <div className="cat" key={id}>
        <span className="title">{name}</span>
        <img src={image} alt={`cat pic ${name}`}></img>
        <button onClick={makeAddToCart(updateCart, cat, setModal)}>
          Add to Cart
        </button>{" "}
        <span className="price">{formatter.format(price)}</span>
      </div>
    );
  }
  return <div className="cat-list">{rendered}</div>;
};

export default CatList;
