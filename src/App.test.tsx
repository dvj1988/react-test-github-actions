import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const buttonEl = screen.getByRole("button");
  fireEvent.click(buttonEl);
});
