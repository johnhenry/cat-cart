import { useContext } from "react";
import CartContext from "./CartContext.js";

const Modal = ({ index, children }) => {
  const { modal, setModal } = useContext(CartContext);
  return (
    <div
      className="modal"
      style={{ display: modal && modal === index ? "flex" : "none" }}
    >
      <button
        className="close-button"
        onClick={() => setModal(0)}
        title="Click to close"
      ></button>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
