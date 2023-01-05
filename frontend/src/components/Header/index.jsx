import React from "react";
import "./Header.scss"
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tokenActions } from "../../store/token";
import { authActions } from "../../store/auth";

/**
 * Component Header
 * @returns {JSX} React Component
 */
const Header = () => {
const navigate = useNavigate();
// Get the state of the authentification
const isAuth = useSelector((state) => state.auth.isAuth)
//Retrieve profil infos and change 
const profile = useSelector((state) => state.profile)

const dispatch = useDispatch();

/**
 * Function logout
 * @param {string} event
 */
const handleLogout = (e) => {
    e.preventDefault()
    //Reinitialize the token's state
    dispatch(tokenActions.dropToken())
    //Reinitialize the auth's state
    dispatch(authActions.logout())
    //Redirection to Homepage
    navigate("/")
    
}
    return(
            <header className="container__header">
                <Link to={"/"}><img src="/img/argentBankLogo.png" alt="Logo Argent Bank" /></Link>
                {isAuth ?  (
                    <div className="container__header-rightBlock" >
                    <div className="btn"><img src="/img/icons/circle-user-solid.svg" alt="Icon User"></img> {profile.firstName}</div>
                    <Link to={"/"} className="btn" onClick={handleLogout}><img src="/img/icons/right-from-bracket-solid.svg" alt="Icon User" /> Logout</Link>
                </div>
                ) :
                (<div className="container__header-rightBlock">
                <Link to={"/login"} className="btn"><img src="/img/icons/circle-user-solid.svg" alt="Icon User"></img> Sign In</Link>
                </div>)
                } 
            </header>
    )
}

export default Header;