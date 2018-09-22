import React from "react";
import NavBar from "../../components/UI/NavBar/NavBar";
import LoginForms from "../../components/LoginForms/LoginForms";
import Wrap from "../../hoc/wrap";

const Login = props => {
  return (
    <Wrap>
      <NavBar />
      <LoginForms author={props.author} />
    </Wrap>
  );
};

export default Login;
