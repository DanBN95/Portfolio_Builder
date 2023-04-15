import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    }
]);


export default function Root() {
  return (
    <RouterProvider router={router} />
  )
}


