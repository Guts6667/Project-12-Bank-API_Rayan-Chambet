import React from "react";
import "./Home.scss"
import {Link} from "react-router-dom";
/**
 * Page Home
 * @returns {JSX} React Component
 */
const Home = () => {

    return(
        <div className="container__home">
            <header className="container__home-header">
                <img src="/img/argentBankLogo.png" alt="Logo Argent Bank" />
                <Link to={"/signin"} className="signIn"><img src="/img/icons/circle-user-solid.svg" alt="Icon User"></img> Sign In</Link>
            </header>
            <section className="container__home-hero">
                <div>
                    <h2>No fees.<br/> No minimum deposit.<br/>High interest rates.</h2>
                    <p>Open a savings account with Argent Bank today!</p>
                </div>
            </section>
            <section className="container__home-feature">
                <article className="feature-box">
                    <div className="feature-box-frame">
                        <img src="/img/icons/icon-chat.png" alt="Icon Chat" />
                    </div>
                    <h3>You are our #1 priority</h3>
                    <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
                </article>
                <article className="feature-box">
                    <div className="feature-box-frame">
                        <img src="/img/icons/icon-chat.png" alt="Icon Chat" />
                    </div>
                    <h3>More savings means higher rates</h3>
                    <p>The more you save with us, the higher your interest rate will be!</p>
                </article>
                <article className="feature-box">
                    <div className="feature-box-frame">
                        <img src="/img/icons/icon-chat.png" alt="Icon Chat"  />
                    </div>
                    <h3>Security you can trust</h3>
                    <p>We use top of the line encryption to make sure your data and money is always safe.</p>
                </article>
            </section>
            <footer className="container__home-footer">
                <p>Copyright 2020 Argent Bank</p>
            </footer>
        </div>
    )
}

export default Home;