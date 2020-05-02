import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "./../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");

  const { clearFilter, filterContacts, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (evt) => {
    if (text.current.value !== "") {
      filterContacts(evt.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        style={{ marginTop: "0.7rem" }}
        ref={text}
        type="text"
        placeholder="Filter contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
