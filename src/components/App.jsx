import { useEffect, useState } from "react";
// import "./App.css";
import CatList from "./CatList.jsx";
import CatCart from "./CatCart.jsx";
import Modal from "./Modal.jsx";
import CartContext from "./CartContext.js";
import fetchData from "../util/fetch-data.js";

const Application = () => {
  const [cats, setCats] = useState([]);
  const [cart, updateCart] = useState([]);
  const [modal, setModal] = useState(0);
  useEffect(() => fetchData().then(setCats), []);

  return (
    <>
      <header>
        Cat Cart
        <button className="open-cart" onClick={() => setModal(1)}>
          <img src="https://img.icons8.com/material-sharp/24/000000/favorite-cart.png" />
          ({cart.length})
        </button>
        <button className="open-cart" onClick={() => setModal(3)}>
          attributions
        </button>
      </header>
      <CartContext.Provider value={{ cats, cart, modal, setModal, updateCart }}>
        <CatList />
        <Modal index={1}>
          <CatCart />
        </Modal>
        <Modal index={2}>
          <div className="message">
            Sawwies!
            <br />
            No more than 3 cats can can be adopted.
          </div>
        </Modal>
        <Modal index={3}>
          <div className="message">
            <div>Shopping Cart Icon</div>
            <div>
              <a
                href="https://icons8.com/icon/100405/favorite-cart"
                target="_blank"
                rel="noreferrer"
              >
                Favorite Cart icon by Icons8
              </a>
            </div>
          </div>
        </Modal>
      </CartContext.Provider>
    </>
  );
};

export default Application;
