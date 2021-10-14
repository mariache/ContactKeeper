import React, { useState, useContext, useEffect } from "react";
import AlertContext from "./../context/alert/alertContext";
import AuthContext from "./../context/auth/authContext";
import {AuthLabels} from "./Labels";
import { Link } from "react-router-dom";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === AuthLabels.invalidCredentials) {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert(AuthLabels.fillInAllFields, "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h3 className="title-secondary ">
        {AuthLabels.account} <span className="form-container__title form-title">{AuthLabels.login}</span>
      </h3>
      <p className="text-center">{AuthLabels.pleaseLogin}</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">{AuthLabels.email} </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">{AuthLabels.password}</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input type="submit" value="Login" className="btn btn-block" />
        <div
          className="flex-container"
          style={{
            padding: "0.4rem 1.3rem",
          }}
        >
          <Link to="/register" className="secondary-color">
            {AuthLabels.register}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
