import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Films from "./components/Films/Films.jsx";
import SingleMovie from "./SingleMovie.jsx";
import FullMovie from "./FullMovie.jsx";
import Home from "./components/Home/Home.jsx";
import LogIn from "./LogIn.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      
      
      {
        path:'/films',
        element:<Films/>
      },
      {
        path:'/films/:id',
        element:<SingleMovie/>
      },
      {
        path: '/playvid/:id',
        element:<FullMovie/>
      },
      {
        path:'/login',
        element:<LogIn/>
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
