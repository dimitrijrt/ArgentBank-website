
import style from "./header.css"
import {useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { setUser } from "../redux/actions/actions";
import {getUserName} from "../Services/user.services"

function Edit()

    {

         const [userName,setUserName] = useState("");
         const [firstname, setFirstname] = useState('');
        const [lastName, setLastName] = useState('');
         const user = useSelector((state) => state.userState.user);
         const token = useSelector(state => state.userState.token);
         const dispatch = useDispatch();

        const onSubmit = async (e) => {
            try {
                e.preventDefault()
                const response = await setUser(firstname,lastName)
                dispatch(setUser(response.body));
            
            }
            catch { 
                alert("error");

            }
        }
        return (
            <main>

                <div className="edit">
                    <div className="form">
                    <label htmlFor="firstname">Firstname : </label>
                    <input type="firstName" id="firstName"  onChange={(e) => {setFirstname(e.target.value)}}></input>
                </div>
                <div className="form">
                    <label htmlFor="Lastname">Lastname : </label>
                    <input type="lastName" id="lasttName"  onChange={(e) => {setLastName(e.target.value)}}></input>
                </div>
                </div>
                <div className="edit">
                    <button  onClick={onSubmit} >Save</button>
                    <button  >Cancel</button>
                </div>

                
              
            </main>
               
        
            
     
        )
    }

    export default Edit
