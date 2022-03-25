import React from "react";
//@ts-ignore
import bgSvg from "assets/images/authSvg.png";

import "./Auth.css";

const Auth = () => {
  return (
    <div className="authContainer">
      <div className="mainContainer">
        <img className="upperBackground" src={bgSvg} />
        <div style={{zIndex: 10}}>
        <p className="heading">Welcome</p>
        <input className="input" placeholder="email" type="email" />
        <br />
        <input className="input" placeholder="password" type="password" />
        <br />
        <input className="checkbox" type="checkbox" name="check" id="rememberme" />
        <label htmlFor="rememberme">Remember Me </label>
        </div>
      </div>
    </div>
  );
};

export default Auth;
