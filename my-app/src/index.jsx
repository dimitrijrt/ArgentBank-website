import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signin from './pages/sign-in.jsx'
import User from './pages/user.jsx'
import Error from './pages/Error.jsx'
import Header from './components/header.jsx'
import Home from './pages/home.jsx'
import configureStore from "./redux/store.js";
import { Provider } from "react-redux";
import App from './App.js'


const store = configureStore();


ReactDOM.render (
    
    <React.StrictMode>
        <Provider store={store}>
        <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)