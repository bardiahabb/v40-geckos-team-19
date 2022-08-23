import React, { useState } from "react";
import "./LoginPageForm.css";

const LoginPageForm = () => {
  const [email, setEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState();
  const [password, setPassword] = useState("");
  const [passwordIsTouched, setPasswordIsTouched] = useState();

  //email check - no empty submission
  let regex = /^\S+@\S+\.\S+$/;
  const emailCheck = regex.test(email) === true;
  const emailIsValid = email.trim() !== "" && emailCheck;
  const emailIsInvalid = !emailIsValid && emailIsTouched;

  //password check - no empty submission
  const passwordIsValid = password.trim() !== "";
  const passwordIsInvalid = !passwordIsValid && passwordIsTouched;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setEmailIsTouched(true);
    setPasswordIsTouched(true);

    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAP16n5-hHHW2ZB_qYPvqaHQlX_kAScjIk",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            let errorMsg = "Sorry - something went wrong!";
            // if (data && data.error && data.error.message) {
            //   errorMsg = data.error.message;
            // }

            throw new Error(errorMsg);
          });
        }
      })
      .then((data) => {
        console.log('Login successful');
      })
      .catch((err) => {
        alert(err.message);
      });

    console.log(email, password);
    setEmail("");
    setPassword("");
    setEmailIsTouched(false);
    setPasswordIsTouched(false);
  };

  return (
    <form action="" className="login-form" onSubmit={handleFormSubmit}>
      <label htmlFor="email-input">
        Email
        <input
          type="email"
          id="email-input"
          onChange={handleEmailChange}
          value={email}
        />
        {emailIsInvalid && <p>Email must not be empty</p>}
      </label>
      <label htmlFor="password-input">
        Password
        <input
          type="password"
          id="password-input"
          className="password-input"
          onChange={handlePasswordChange}
          value={password}
        />
        {passwordIsInvalid && <p>Password must not be empty</p>}
        <div className="login-help">
          <div className="remember-me">
            <input type="checkbox" id="remember-me" />{" "}
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <a href="/">Forgot Password?</a>
        </div>
      </label>
      <div className="form-actions">
        <button type="submit">Login</button>
        {/* {!formIsValid && <p>Please check your email and password</p>} */}
      </div>
    </form>
  );
};

export default LoginPageForm;
