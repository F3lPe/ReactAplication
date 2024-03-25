 import { createBrowserRouter,} from "react-router-dom"
import IndexClasses from "./Classes";
import React from "react";
import App from "./App"

export default function Routes(){
   return createBrowserRouter([
    {
        path:"/",
        element: <App/>
    },
    {
        path:"/classes",
        element: <IndexClasses/>
    }
   ])
}