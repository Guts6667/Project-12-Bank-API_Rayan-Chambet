import React from "react";
import "./SignIn.scss"

const SignIn = () => {

    return(
         <main className="container__signIn">
            <div className="container__signIn-modal">
                <img src="/img/icons/circle-user-solid.svg" alt="Icon User" />
                <h2>Sign In</h2>
                <form action="" className="form-signIn">
                    <div className="form-signIn-input">
                        <label htmlFor="">Username</label>
                        <input type={"text"} />
                    </div>
                    <div className="form-signIn-input">
                        <label htmlFor="">Password</label>
                        <input type={"text"} />
                    </div>
                    <div className="form-signIn-ratio" >
                        <label htmlFor="">Remember me</label>
                        <input type={"checkbox"} />
                    </div>
                    <div className="form-signIn-submit">
                        <input type={"submit"} value={"Sign In"} />
                    </div>
                    
                </form>
            </div>
         </main>
    )
}

export default SignIn;