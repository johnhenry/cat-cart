import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

test("renders initial cart total", () => {
  render(<App />);
  const linkElement = screen.getByText(/0/i);
  expect(linkElement).toBeInTheDocument();
});
