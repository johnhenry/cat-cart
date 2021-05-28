import { render, screen } from "@testing-library/react";
import CartContext from "../CartContext.js";
import Cat from "./Cat.jsx";
test("renders cat name", () => {
  const cart = [];
  const cat = {
    id: "1",
    price: "100",
    name: "Stray",
    image: "https://example.com/cat.png",
  };
  const clickHandler = () => {};
  render(
    <CartContext.Provider value={{ cart }}>
      <Cat cat={cat} click={clickHandler} inCart={false} key={cat.id} />
    </CartContext.Provider>
  );
  const nameElement = screen.getByText(/stray/i);
  expect(nameElement).toBeInTheDocument();
});
