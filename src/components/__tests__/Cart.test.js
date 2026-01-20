import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import Cart from "../Cart";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import appStore from "../../utils/appStore";

global.fetch= jest.fn(() => {
    return Promise.resolve({
        json: () =>  Promise.resolve(MOCK_DATA_NAME)
        
    })
}) 

it("Should load Restaurant Menu Component", async () => {
    render( 
      //screen.debug(),
    // render((<RestaurantMenu/>)
      <Provider store={appStore}>
        <MemoryRouter initialEntries={["/restaurant/123"]}>
          
          <Routes>
            <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </MemoryRouter>
      </Provider>


    );
    //const accordionHeader = await screen.findByText("Crazy Deals (2)");
   const accordionHeader = await screen.findByText("Tea Cakes (2)");
    fireEvent.click(accordionHeader);

    const items = await screen.findAllByTestId("foodItems");
    expect(items.length).toBe(24);

    const addBtn = screen.getAllByRole("button", { name: "Add +" });
    expect(addBtn.length).toBe(24);




});