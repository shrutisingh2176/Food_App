import {render,screen,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json";  
import { BrowserRouter } from "react-router-dom"; 
 


global.fetch= jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it ("Should render the Body Component with Search ", async () => {
    
    // await act(async () => render(
    // <BrowserRouter>
    // <Body/> 
    // </BrowserRouter>));


    render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

   const searchInput = await screen.findByTestId("searchId");
   const searchBtn = screen.getByRole("button", { name: "Search" });
   expect (searchBtn).toBeInTheDocument();
   fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");
   expect(cards.length).toBe(1);

});

it("Should filter top rated restaurants when 'Top Rated' button is clicked", async () => {
  render(
    <BrowserRouter> 
    <Body />
    </BrowserRouter>
     
    
  );

  await screen.findAllByTestId("resCard");

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const cards = await screen.findAllByTestId("resCard");

  expect(cards.length).toBe(8);
});
