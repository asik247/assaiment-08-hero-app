import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Install from "../Pages/Install";
import Details from "../Pages/Details";
import PageNotFound from "../Pages/PageNotFound";
import AppNotFound from "../Pages/AppNotFound";


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
                children:[
                    {
                        index:true,
                        element:<Apps></Apps>
                    },
                    {
                        path:'*',
                        element:<AppNotFound></AppNotFound>
                    }
                ]
            },
            {
                path:'/install',
                element:<Install></Install>
            },
            {
                path:'/detail/:id',
               element:<Details></Details>
            },
            {
                path:'*',
                element:<PageNotFound></PageNotFound>
            }
        ]
    }
])