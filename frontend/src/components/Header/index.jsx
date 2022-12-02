import React from "react";
import "./Header.scss"
import {Link} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Header = () => {
    const [isHome, setIsHome] = useState(false)
    
    useEffect(() => {
        const url = window.location.pathname
        if(url === "/"){
            setIsHome(true)
        }
    }, [])


    return(
            <header className="container__header">
                <Link to={"/"}><img src="/img/argentBankLogo.png" alt="Logo Argent Bank" /></Link>
                {
                    isHome && (
                        <Link to={"/login"} className="signIn"><img src="/img/icons/circle-user-solid.svg" alt="Icon User"></img> Sign In</Link>
                    )
                }
            </header>
    )
}

export default Header;