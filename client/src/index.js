import "./index.scss";

import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./redux/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home/Home";
import Detail from "./routes/Detail/Detail";
import CreatePokemon from "./routes/CreatePokemon/CreatePokemon";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/pokemon/:pokemonId",
        element: <Detail />,
    },
    {
        path: "/pokemon/create-pokemon",
        element: <CreatePokemon />,
    },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
