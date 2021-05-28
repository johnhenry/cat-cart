import { useContext } from "react";
import CartContext from "../CartContext.js";
import Cat from "../Cat/Cat.jsx";
import { makeAddToCart } from "../../util/update-cart.js";
import "./cat-list.css";
const CART_MAX = 3;
const CatList = () => {
  const { cats, updateCart, setModal, cart } = useContext(CartContext);
  const rendered = [];
  for (const cat of cats) {
    const clickHandler =
      cart.length < CART_MAX
        ? makeAddToCart(updateCart, cat)
        : () => setModal(2);
    rendered.push(
      <Cat cat={cat} click={clickHandler} inCart={false} key={cat.id} />
    );
  }
  return <div className="cat-list">{rendered}</div>;
};

export default CatList;
