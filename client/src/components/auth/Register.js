import React, { useState, useContext, useEffect } from "react";
import AlertContext from "./../context/alert/alertContext";
import AuthContext from "./../context/auth/authContext";
import { Link } from "react-router-dom";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
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
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords don't match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  return (
    <div className="form-container">
      <h3 className="title-secondary ">
        Account{" "}
        <span className="form-container__title form-title">Register</span>
      </h3>
      <p className="text-center">Please, fill the form to create an account</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email </label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm password</label>
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
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
