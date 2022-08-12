import React from "react";
import "./LoginPage.css";
import LoginPageForm from "./LoginPageForm";

import Facebook from "../../images/Facebook.png";
import Twitter from "../../images/Twitter.png";
import Google from "../../images/Google.png";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="LoginPageForm">
        <header>
          <h2 className="heading">Login to your Account</h2>
          <p className="subheading">Show your artworks and get appreciated</p>
        </header>

        <LoginPageForm />

        <p className="or-text">------------- Or ------------- </p>
        <div className="signup-social-icons">
         <a href="/"><img src={Google} alt="Login with Google" className="google-icon" /></a> 
         <a href="/"><img src={Facebook} alt="Login with Facebook" /></a> 
         <a href="/"><img src={Twitter} alt="Login with Twitter" /></a> 
        </div>
        <footer className="form-footer">
          <p>Don't have an account? <a href="/">Sign Up</a></p>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
