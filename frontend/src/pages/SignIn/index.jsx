import React from "react";
import { useState } from "react";
import login from "../../service/login";
import "./SignIn.scss"

const SignIn = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        if(username === "" || password === ""){
            event.preventDefault();
        }else{
            alert(`The name you entered was: ${username} ${password}`)

            const data = {
                "email" : username,
                "password" : password,
            }
            login(data)
        }
        
      }
    return(
         <main className="container__signIn">
            <div className="container__signIn-modal">
                <img src="/img/icons/circle-user-solid.svg" alt="Icon User" />
                <h2>Sign In</h2>
                <form className="form-signIn" onSubmit={handleSubmit} >
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