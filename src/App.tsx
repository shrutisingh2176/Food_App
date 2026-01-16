
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import {lazy , Suspense, useEffect} from "react";
import UserContext from "./utils/UserContext";
import { useState } from "react";

const Grocery = lazy (()=> import ("./components/Grocery"));

const AppLayout =() => {
  const [username,setUserName]= useState();
  //authentication

  useEffect(() => {
    // Make API call and send username and password
    const data ={
      name:"Shruti Singh"
    };
    setUserName(data.name);
  },[]);


    return (
     
         <div >
          <UserContext.Provider value  = {{loggedInUser:username} }>
            <Header/>
          </UserContext.Provider>
            <Outlet/>
        </div>
       
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [

       {
         path: "/",
         element: <Body/>,
       },
      {      
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
      },       
      {
        path: "/contact",
        element: <Contact/>,
      },
      
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,

      }

        ],
        errorElement: <Error/>
        
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root")!);

  root.render(<RouterProvider router={appRouter} />);
  