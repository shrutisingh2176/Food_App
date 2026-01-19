import { render, screen } from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom";


describe("Contact Us Page Test Case",() => {
test("Should load Contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
     expect(heading).toBeInTheDocument();
});
   //test=it..same thing
 it("should load the button Submit is present", () => {
    render(<Contact />);

    const buttonElement = screen.getByText("Submit");

    expect(buttonElement).toBeInTheDocument();
  });


  test("Should Test whether the name input is present on the page", () => {
    render(<Contact />);
    //Quering
    const inputElement = screen.getByPlaceholderText("Name");

    expect(inputElement).toBeInTheDocument();
  });
})
