import { useContext } from "react";
import CartContext from "./CartContext.js";
import { makeAddToCart } from "../util/update-cart.js";
const CatList = () => {
  const { cats, updateCart, setModal, cart } = useContext(CartContext);
  const rendered = [];
  for (const cat of cats) {
    const { id, name, image, price } = cat;
    rendered.push(
      <div className="cat" key={id}>
        <img src={image} alt={`cat pic ${name}`}></img>
        <span className="title">{name}</span>
        <button
          className="add-to-cart"
          onClick={makeAddToCart(updateCart, cat, setModal)}
          disabled={cart.includes(cat)}
        >
          <span className="price">{Number(price).toFixed(2)}</span>
        </button>
      </div>
    );
  }
  return <div className="cat-list">{rendered}</div>;
};

export default CatList;
