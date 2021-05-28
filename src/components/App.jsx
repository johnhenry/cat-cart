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
    <div className="App">
      <header>
        Cat Cart
        <button onClick={() => setModal(1)}>Cart ({cart.length})</button>
      </header>
      <CartContext.Provider value={{ cats, cart, modal, setModal, updateCart }}>
        <CatList />
        <Modal index={1}>
          <CatCart />
        </Modal>
        <Modal index={2}>
          <div>Too Many of THAT Cat!</div>
        </Modal>
        <Modal index={3}>
          <div>Too Many Cats!</div>
        </Modal>
      </CartContext.Provider>
    </div>
  );
};

export default Application;
