import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainStoreProvider from "./components/store-provider/MainStoreProvider";
import { AppContextProvider } from "./context/AppContext";
import { LoadingProvider } from "./context/LoadingContext";
import { NavigationProvider } from "./context/NavigationContext";
import "./index.css";
import DefaultLayout from "./views/DefaultLayout";
import HomeView from "./views/home/HomeView";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomeView />} />
        </Route>
    )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppContextProvider>
            <MainStoreProvider>
                <NavigationProvider>
                    <LoadingProvider>
                        <RouterProvider router={router} />
                    </LoadingProvider>
                </NavigationProvider>
            </MainStoreProvider>
        </AppContextProvider>
    </React.StrictMode>
);
