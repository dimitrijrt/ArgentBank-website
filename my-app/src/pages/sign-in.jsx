import { signin } from "../Services/user.services"
import Footer from "../components/footer"
import Header from "../components/header"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
 import {useDispatch, useSelector} from "react-redux";
import {setToken, setUser} from "../redux/actions/actions"
import {getUser} from "../Services/user.services"
import { useEffect } from "react";




function Signin() {
   
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const isLogged = useSelector((state) => !!state.userState.user && !!state.userState.token);
    

    const onSubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await signin(email,password)
            dispatch(setToken(response.body.token));
            const responseUser = await getUser(response.body.token);
            dispatch(setUser(responseUser.body));
            navigate("/profile")
        }
        catch { 
            alert("error");

        }
    }

   

   
    return (
        <div>
            <Header/>
            <main class="main bg-dark">
                <section class="sign-in-content">
                    <i class="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={onSubmit}>
                    <div class="input-wrapper">
                        <label for="email">email</label>
                        <input type="email" value={email} id="email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div class="input-wrapper">
                        <label for="password">Password</label
                        ><input value={password} type="password" id="password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div class="input-remember">
                        <input type="checkbox" id="remember-me" /><label for="remember-me"
                        >Remember me</label
                        >
                    </div>
                
                     <button type="submit" className="sign-in-button">Sign In</button>
                    

                    </form>
                </section>
                </main>
                <Footer/>
           
        </div>
        

    )
}



export default Signin