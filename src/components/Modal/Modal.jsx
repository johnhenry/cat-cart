import { useContext } from "react";
import CartContext from "../CartContext.js";
import "./modal.css";
const Modal = ({ index, children }) => {
  const { modal, setModal } = useContext(CartContext);
  return modal && modal === index ? (
    <div className="modal" style={{ display: "flex" }}>
      <button
        className="close-button"
        onClick={() => setModal(0)}
        title="Click to close"
      ></button>
      <div className="modal-content">{children}</div>
    </div>
  ) : null;
};

export default Modal;
