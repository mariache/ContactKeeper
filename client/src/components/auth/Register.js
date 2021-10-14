import React, { useState, useContext, useEffect } from "react";
import AlertContext from "./../context/alert/alertContext";
import AuthContext from "./../context/auth/authContext";
import { Link } from "react-router-dom";
import {AuthLabels} from "./Labels";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === AuthLabels.userAlreadyExists) {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { email, name, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert(AuthLabels.pleaseEnterAllFields, "danger");
    } else if (password !== password2) {
      setAlert(AuthLabels.passwordsDontMatchpass, "danger");
    } else {
      register({ name, email, password });
    }
  };

  return (
    <div className="form-container">
      <h3 className="title-secondary ">
        {AuthLabels.account}
        <span className="form-container__title form-title">{AuthLabels.register}</span>
      </h3>
      <p className="text-center">{AuthLabels.pleaseFillFormCreateAccount}</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">{AuthLabels.name}</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">{AuthLabels.email} </label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">{AuthLabels.password}</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">{AuthLabels.confirmPassword}</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" value="Register" className="btn  btn-block" />
        <div
          className="flex-container"
          style={{
            padding: "0.4rem 1.3rem",
          }}
        >
          <Link to="/login" className="secondary-color">
            {AuthLabels.login}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
