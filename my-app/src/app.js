import React from "react";
import { Provider } from "react-redux";
import ActionComponent from "./components/ActionComponent";
import "./App.css";
import configureStore from "./redux/store";
import Signin from "./pages/sign-in";
import Home from "./pages/home";
import User from "./pages/user";
import { Route, Router, Routes } from "react-router-dom";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
            <Routes>
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/" element={<Home/>} />
                <Route path="/user" element={<User/>} />
                
            </Routes>
        </Router>
    </Provider>
  );
};

export default App;