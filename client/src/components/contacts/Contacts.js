import React, { Fragment, useContext } from "react";
import ContactContext from "../../components/context/contact/contactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <Fragment>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
