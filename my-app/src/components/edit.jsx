
import style from "./header.css"
import {useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { setUser } from "../redux/actions/actions";
import {getUserName, updateUser} from "../Services/user.services"

function Edit()

    {

         const [userName,setUserName] = useState("");
         const user = useSelector((state) => state.userState.user);
         const token = useSelector(state => state.userState.token);
         const dispatch = useDispatch();

        const onSubmit = async (e) => {
            try {
                e.preventDefault()
                const response = await updateUser(token,userName)
                console.log(response)
                dispatch(setUser(response.body));
            
            }
            catch { 
                alert("error");

            }
        }
        return (
            <form onSubmit={onSubmit}>

                <div className="edit">
                     <div className="form">
                    <label htmlFor="Username">Username : </label>
                    <input type="userName" id="userName"  onChange={(e) => {setUserName(e.target.value)}}></input>
                </div>
                    <div className="form">
                    <label htmlFor="firstname">Firstname : </label>
                    <input type="firstName" id="firstName"  value={user.firstName} disabled></input>
                </div>
                <div className="form">
                    <label htmlFor="Lastname">Lastname : </label>
                    <input type="lastName" id="lastName"  value={user.lastName} disabled></input>
                </div>
                </div>
                <div className="edit">
                    <button  >Save</button>
                    <button  >Cancel</button>
                </div>

                
              
            </form>
               
        
            
     
        )
    }

    export default Edit
