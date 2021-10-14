import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AuthContext from "../context/auth/authContext";
import ContactContext from "../context/contact/contactContext";
import {LayoutLabels} from "./Labels"

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <>
      <li>{`${LayoutLabels.hello} ${user && user?.name}`}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />
          <span className="hide-sm">{LayoutLabels.logout}</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <Link to="/register">{LayoutLabels.register}</Link>
      </li>
      <li>
        <Link to="/login">{LayoutLabels.login}</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-primary">
      <h3 className="title-secondary ">
        <Link to="/">
          <i className={icon} /> {title}
        </Link>
      </h3>
      <ul>
        <ul className="navbar--list">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: LayoutLabels.contactKeeper,
  icon: "fas fa-id-card-alt",
};

export default Navbar;
