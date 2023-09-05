
import { Link } from "react-router-dom"
import style from "./header.css"

function Header()
    {
        return (
            
                <nav class="main-nav">
                    <Link class="main-nav-logo" href="/user"/>
                    <img
                    className="main-nav-logo-image"
                    src="./argentBankLogo.png"
                    alt="Argent Bank Logo"
                    />
                    <div>
                        <a className="main-nav-item" href="/sign-in"/>
                        <i className="fa fa-user-circle"></i>
                       Sign-in
                       
                    </div>
                </nav>
        
            
     
        )
    }

    export default Header
