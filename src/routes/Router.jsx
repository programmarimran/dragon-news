import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import About from '../components/header/About/About';
import Career from '../components/header/Career/Career';
import Home from '../components/header/HomeLayout/Home';
import CategoryNews from '../components/header/Pages/CategoryNews';

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
            element:<CategoryNews></CategoryNews>
        },
       ] 
    },
   
    {
        path:'/*',
        element:<p>error 404</p>
    }
])
export default Router;