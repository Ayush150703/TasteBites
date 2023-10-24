import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// const Instamart=lazy(()=>import("./components/Instamart"));
import Shimmer from "./components/Shimmer";

const AppLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        chidren:[
          {
            path:"/profile",
          element:<Profile/>,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      // {
      //   path:"/instamart",
      //   element:<Suspense fallback={<Shimmer/>}> <Instamart/></Suspense> 
      // }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


