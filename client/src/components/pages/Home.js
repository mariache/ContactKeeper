import React, { useContext, useEffect } from "react";
import ContactList from "../contacts/ContactList";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h3 className="title-secondary">List of contacts</h3>
      <ContactFilter />
      <ContactList />
    </>
  );
};

export default Home;
