import React, { useContext, useEffect } from "react";
import ContactList from "../contacts/ContactList";
import ContactForm from "../contacts/ContactForm";
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
      <h2 className="text-primary">List of contacts</h2>
      <div className="grid-2">
        <div>
          <ContactFilter />
          <ContactList />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Home;
