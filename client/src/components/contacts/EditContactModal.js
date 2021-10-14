import React, { useState, useContext, useEffect } from "react";
import ContactContext from "./../context/contact/contactContext";
import {ContactLabels} from "./Labels"

const EditContactModal = () => {
  const contactContext = useContext(ContactContext);

  const { current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (evt) => {
    setContact({ ...contact, [evt.target.name]: evt.target.value });
  };

  const clearAll = () => {
    clearCurrent();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateContact(contact);
    clearAll();
  };

  return (
    <div id="edit-form-modal" className="modal">
      <form onSubmit={onSubmit} className="card" style={{ margin: 0 }}>
        <h3 className="title-secondary">Edit contact</h3>
        <label>
          {ContactLabels.name}
          <input
            className="form-add-input"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          />
        </label>
        <label>
          Email
          <input
            className="form-add-input"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </label>
        <label>
          {ContactLabels.phone}
          <input
            className="form-add-input"
            type="tel"
            name="phone"
            value={phone}
            onChange={onChange}
          />
        </label>
        <h5>{ContactLabels.contactType}</h5>
        <div className="radio-wrapper">
          <div>
            <p>
              <label>
                <input
                  class="with-gap"
                  name="type"
                  type="radio"
                  value="personal"
                  checked={type === "personal"}
                  onChange={onChange}
                />
                <span>{ContactLabels.personal}</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  class="with-gap"
                  name="type"
                  type="radio"
                  value="professional"
                  checked={type === "professional"}
                  onChange={onChange}
                />
                <span>{ContactLabels.professional}</span>
              </label>
            </p>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value={"Update Contact"}
            className="modal-close btn btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default EditContactModal;
