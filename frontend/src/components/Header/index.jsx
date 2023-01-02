import React from "react";
import "./Header.scss"
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tokenActions } from "../../store/token";
import { authActions } from "../../store/auth";

const Header = () => {
    const navigate = useNavigate();
// Get the state of the authentification
const isAuth = useSelector((state) => state.auth.isAuth)
// Get the state of the token
const token = useSelector((state) => state.token.token)
//Retrieve profil infos and change 
const profile = useSelector((state) => state.profile)

// Gérer le problème de mise à jour du header avec le useEffect et le useState

const dispatch = useDispatch();
const handleLogout = (e) => {
    e.preventDefault()
    dispatch(tokenActions.dropToken())
    dispatch(authActions.logout())
    navigate("/")
    
}

    return(
            <header className="container__header">
                <Link to={"/"}><img src="/img/argentBankLogo.png" alt="Logo Argent Bank" /></Link>
                {!isAuth &&
                    <div className="container__header-rightBlock">
                    <Link to={"/login"} className="btn"><img src="/img/icons/circle-user-solid.svg" alt="Icon User"></img> Sign In</Link>
                    </div>
                }
                {isAuth && token && profile &&
                <div className="container__header-rightBlock" onClick={handleLogout}>
                    <Link to={"/profile"} className="btn"><img src="/img/icons/circle-user-solid.svg" alt="Icon User"></img> {profile.firstName}</Link>
                    <Link to={"/"} className="btn"><img src="/img/icons/right-from-bracket-solid.svg" alt="Icon User" /> Logout</Link>
                </div>
                } 
            </header>
    )
}

export default Header;