import React from "react";

import Home from '../pages/Home';
import Login from '../pages/Login';
import Gallery from '../pages/Gallery';

export default [
    {
        path: '/',
        label: 'Home',
        element: <Home />,
    },
    {
        path: '/login',
        label: 'Login', 
        element: <Login />,
    },
    {
        path: '/gallery',
        label: 'Gallery',
        element: <Gallery />,
    },
];
