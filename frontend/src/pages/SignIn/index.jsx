import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import getToken from "../../service/getToken";
import { authActions } from "../../store/auth";
import login from "../../service/login";
import { tokenActions } from "../../store/token";
import "./SignIn.scss"
import { profileActions } from "../../store/profile";

//Utiliser useNavigate pour la redirection vers le profil de l'utilisateur
// ajouter l'id à l'url?
// Envoyer une requête fetch pour récupérer le profil en se servant du token?

const SignIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // Get the state of the token
    const token = useSelector((state) => state.token)
    // Retrieves the input values via onChange listener
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //Function called when the form is submited
    const handleSubmit = async (event) => {
        event.preventDefault()
    // getToken is the service in charge of fetching the token
    // Save the response in const dataToken
      const dataToken = await getToken(email, password);
    // Status = 200, the token is saved in the state
      if(dataToken.status === 200){
        dispatch(tokenActions.getToken(dataToken.body.token))
      }
    // If the state in charge of the taken is true
      if(token){
    // Update the auth state to true
        dispatch(authActions.login())
    // Calls and save the user datas in the const dataUser
        const dataUser = await login(dataToken.body.token);
        if(dataUser.status === 200){
          dispatch(profileActions.getProfile(dataUser.body))
          navigate("/profile")
        }
      }
      // Add a service allowing to modify the userDatas
      // Make Swagger doc (see OC)
      

      }
    return(
         <main className="container__signIn">
            <div className="container__signIn-modal">
                <img src="/img/icons/circle-user-solid.svg" alt="Icon User" />
                <h2>Sign In</h2>
                <form className="form-signIn" onSubmit={handleSubmit}  >
                    <div className="form-signIn-input">
                        <label htmlFor="">Username</label>
                        <input type={"text"} id="username" onChange={(e)=> setUsername(e.target.value)}/>
                    </div>
                    <div className="form-signIn-input">
                        <label htmlFor="">Password</label>
                        <input type={"password"} required id="password" onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <div className="form-signIn-ratio" >
                        <label htmlFor="">Remember me</label>
                        <input type={"checkbox"} />
                    </div>
                    <div className="form-signIn-submit">
                        <input type={"submit"} value={"Sign In"} id="submitBtn"/>
                    </div>
                    
                </form>
            </div>
         </main>
    )
}

export default SignIn;