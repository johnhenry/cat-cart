import { useContext } from "react";
import CartContext from "../CartContext.js";
import "./cat.css";

const cartButton = (click) => (
  <button className="delete-button" title="remove from cart" onClick={click} />
);

const listButton = (click, cart, cat) => (
  <button className="add-to-cart" onClick={click} disabled={cart.includes(cat)}>
    <span className="price">{Number(cat.price).toFixed(2)}</span>
  </button>
);

const titleAddition = (price) => (
  <>
    <br />
    <span className="price">{Number(price).toFixed(2)}</span>
  </>
);

const Cat = ({ cat, inCart, click }) => {
  const { cart } = useContext(CartContext);
  const { id, name, image, price } = cat;

  return (
    <div className="cat" key={id}>
      <img src={image} alt={`cat pic ${name}`}></img>
      <span className="title">
        {name}
        {inCart ? titleAddition(price) : null}
      </span>
      {inCart ? cartButton(click) : listButton(click, cart, cat)}
    </div>
  );
};

export default Cat;
