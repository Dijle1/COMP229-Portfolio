import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Signin from "./signin";

//  1) AuthContext'i mockla
vi.mock("./context/AuthContext", () => ({
  useAuth: () => ({
    signIn: vi.fn(),   // test sırasında sahte bir signIn fonksiyonu
  }),
}));

//  2) Router + Auth provider wrapper
const renderWithProviders = (ui) => {
  return render(
    <MemoryRouter>
      {ui}
    </MemoryRouter>
  );
};

test("renders email input", () => {
  renderWithProviders(<Signin />);
  const emailInput = screen.getByPlaceholderText("Email Address");
  expect(emailInput).toBeInTheDocument();
});

test("renders password input", () => {
  renderWithProviders(<Signin />);
  const passInput = screen.getByPlaceholderText("Password");
  expect(passInput).toBeInTheDocument();
});

test("renders Sign In button", () => {
  renderWithProviders(<Signin />);
  const button = screen.getByRole("button", { name: /sign in/i });
  expect(button).toBeInTheDocument();
});
