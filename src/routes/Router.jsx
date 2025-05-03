import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import About from '../components/header/About/About';
import Career from '../components/header/Career/Career';
import CategoryNews from '../components/header/Pages/CategoryNews';
import Login from '../components/header/Pages/Login';
import Register from '../components/header/Pages/Register';
import Home from '../components/header/Pages/Home';
import AuthRoot from '../layout/AuthRoot';

const Router = createBrowserRouter([
    {
       path:'/',
       element:<Root></Root>,
       children:[
        {index:true,Component:Home},
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/career',
            element:<Career></Career>
        },
        {
            path:'/category/:id',
            loader:()=>fetch('/news.json'),
            errorElement:<p>error 4085</p>,
            element:<CategoryNews></CategoryNews>

        },
       ] 
    },
    {
        path:'/auth',
        element:<AuthRoot></AuthRoot>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            },
        ]
    },
   
    {
        path:'/*',
        element:<p>error 404</p>
    }
])
export default Router;