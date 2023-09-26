
import { Link } from "react-router-dom"
import style from "./header.css"
import { useEffect, useState, useRef } from "react";
import {useDispatch, useSelector} from "react-redux";
import {setToken, setUser, removeToken} from "../redux/actions/actions";
import Logo from '../../src/assets/argentBankLogo.png'


function Header()
    {
        
        const token = useSelector((state) => state.token);
        const user = useSelector((state) => state.userState.user);
        const dispatch = useDispatch();

        function signOut() {
        dispatch(removeToken());
  }
        return (
            
                <nav class="main-nav">
                    <Link class="main-nav-logo" to="/user"/>
                    <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                    />
                    <div className="navlink">
                      <i className="fa fa-user-circle"></i>
                      <Link to="sign-in">Sign-in</Link>
                      <Link to="/" onClick={signOut}>Sign-out</Link>  
                    </div>
                </nav>
        
            
     
        )
    }

    export default Header
