import { render } from "@testing-library/react";
import Header from "./Header";
test("Header component matches snapshot", () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
