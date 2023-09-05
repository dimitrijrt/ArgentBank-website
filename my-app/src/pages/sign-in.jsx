import { signin } from "../Services/user.services"
import Header from "../components/header"
import React, { useState } from 'react'

function Signin() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const onSubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await signin(email,password)
            console.log(response)
        }
        catch {

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
                        <label for="email">email</label
                        ><input type="email" value={email} id="username" onChange={e => setEmail(e.target.value)} />
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
                
                    <a href="./user.html" class="sign-in-button">Sign In</a>
                    <button class="sign-in-button">Sign In</button> 

                    </form>
                </section>
                </main>
           
        </div>
        

    )
}



export default Signin