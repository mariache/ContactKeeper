import React, { useContext, useEffect } from "react";
import ContactList from "../contacts/ContactList";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../context/auth/authContext";
import AddBtn from "../../components/pages/AddBtn";
import ContactForm from "../../components/contacts/ContactForm";
import EditContactModal from "../../components/contacts/EditContactModal";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h3 className="title-secondary">List of contacts</h3>
      <AddBtn />
      <ContactForm />
      <EditContactModal />
      <ContactFilter />
      <ContactList />
    </>
  );
};

export default Home;
