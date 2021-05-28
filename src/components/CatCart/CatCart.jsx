import { useContext } from "react";
import CartContext from "../CartContext.js";
import Cat from "../Cat/Cat.jsx";
import { makeRemoveFromCart } from "../../util/update-cart.js";
import "./cat-cart.css";

const CatCart = () => {
  const { cart, updateCart } = useContext(CartContext);
  const rendered = [];
  for (const cat of cart) {
    const clickHandler = makeRemoveFromCart(updateCart, cat.id);
    rendered.push(
      <Cat cat={cat} click={clickHandler} inCart={true} key={cat.id} />
    );
  }
  const total = cart.reduce((prev, { price }) => prev + Number(price), 0);
  return (
    <>
      <div className="cat-cart">
        <div className="total">
          <span className="price">{total.toFixed(2)}</span>
        </div>
        {rendered}
      </div>
    </>
  );
};

export default CatCart;
