import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signin from './pages/sign-in.jsx'
import User from './pages/user.jsx'
import Error from './pages/Error.jsx'
import Header from './components/header.jsx'
import Home from './pages/home.jsx'


ReactDOM.render (
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/" element={<Home/>} />
                <Route path="/user" element={<User/>} />
                <Route path="/404" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)