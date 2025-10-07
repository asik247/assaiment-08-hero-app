import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Install from "../Pages/Install";
import Details from "../Pages/Details";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'/app',
                element:<Apps></Apps>
            },
            {
                path:'/install',
                element:<Install></Install>
            },
            {
                path:'/detail',
                element:<Details></Details>
            }
        ]
    }
])