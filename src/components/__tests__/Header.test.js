
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';

test('should have login button in header component', () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );



    const loginBtn = screen.getByRole('button', { name: 'Login' });
    expect(loginBtn).toBeInTheDocument();
}); 

 test("Should test toggle feature of Login/Logout button onClick", () => {
    render(
         <BrowserRouter>
         <Provider store={appStore}>
         <Header />
        </Provider>
        </BrowserRouter>
      
         
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });
