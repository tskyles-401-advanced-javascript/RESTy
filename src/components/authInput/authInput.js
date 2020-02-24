import React from "react";
import "./authInput.scss";

const AuthInput = props => {
  return (
    <div>
      <h4>Basic Auth</h4>
      <form>
        <input id="name" placeholder="username" onChange={props.getBasicInfo} />
        <input id="pass" placeholder="password" onChange={props.getBasicInfo} />
        <h4>Bearer Token</h4>
        <input placeholder="token" onChange={props.getTokenInfo} />
      </form>
    </div>
  );
};

export default AuthInput;
