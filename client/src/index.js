import './index.scss';

import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from 'react-redux';
import store from './redux/store';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <App />
        )
    },
    {
        path: '/home',
        element: (
            <Home />
        )
    }
])

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);