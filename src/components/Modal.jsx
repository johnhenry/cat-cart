import { useContext } from "react";
import CartContext from "./CartContext.js";

const Modal = ({ index, children }) => {
  const { modal, setModal } = useContext(CartContext);
  return (
    <div
      className="modal"
      style={{ display: modal && modal === index ? "block" : "none" }}
      title="Click to close"
      onClick={() => setModal(0)}
    >
      {children}
    </div>
  );
};

export default Modal;
