import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import Signin from "./pages/sign-in";
import Home from "./pages/home";
import User from "./pages/user";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import { useStore } from "react-redux";


const store = configureStore();
let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate  persistor={persistor}>
         <BrowserRouter>
            <Routes>
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/" element={<Home/>} />
                <Route path="/profile" element={<User/>} />
            </Routes>
        </BrowserRouter>
        </PersistGate>
    </Provider>
  );
};

export default App;