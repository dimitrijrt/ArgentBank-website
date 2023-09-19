import Footer from "../components/footer"
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {useDispatch, useSelector} from "react-redux";
import {setToken, setUser, removeToken} from "../redux/actions/actions";
import Edit from '../components/edit'







function User() {

     const navigate = useNavigate();
    const isLogged = useSelector((state) => !!state.userState.user && !!state.userState.token);
    const token = useSelector((state) => state.token);
    const user = useSelector((state) => state.userState.user);
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
    if (!isLogged) {
      navigate("/")
    }
  }, )
     

    
   function signOut() {
    dispatch(removeToken());
  }

  

    return (
       <div>
            <nav class="main-nav">
            <a class="main-nav-logo" href="./index.html">
                <img
                class="main-nav-logo-image"
                src="./img/argentBankLogo.png"
                alt="Argent Bank Logo"
                />
                <h1 class="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a class="main-nav-item" href="./profile">
                <i class="fa fa-user-circle"></i>
                {user.firstName}
                </a>
                <a class="main-nav-item" href="/" onClick={signOut}>
                <i class="fa fa-sign-out"></i>
                Sign Out
                </a>
            </div>
            </nav>
            <main class="main bg-dark">
            
            
            
            <div class="header">
                <h1>Welcome back<br />{user.firstName} {user.lastName}</h1>
                <button class="edit-button" onClick={() => setToggle(!toggle)}>Edit Name</button>
                {toggle
                    ? <Edit  />
                : ''}
               
            </div>
            <h2 class="sr-only">Accounts</h2>
            <section class="account">
                <div class="account-content-wrapper">
                <h3 class="account-title">Argent Bank Checking (x8349)</h3>
                <p class="account-amount">$2,082.79</p>
                <p class="account-amount-description">Available Balance</p>
                </div>
                <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
                </div>
            </section>
            <section class="account">
                <div class="account-content-wrapper">
                <h3 class="account-title">Argent Bank Savings (x6712)</h3>
                <p class="account-amount">$10,928.42</p>
                <p class="account-amount-description">Available Balance</p>
                </div>
                <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
                </div>
            </section>
            <section class="account">
                <div class="account-content-wrapper">
                <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
                <p class="account-amount">$184.30</p>
                <p class="account-amount-description">Current Balance</p>
                </div>
                <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
                </div>
            </section>
            </main>
            <Footer/>
       </div>
       
      
        
       

    )
}



export default User