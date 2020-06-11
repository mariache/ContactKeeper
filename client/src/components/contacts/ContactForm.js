import React, { useState, useContext } from "react";
import ContactContext from "./../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { current, addContact, clearCurrent } = contactContext;

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
    addContact(contact);

    clearAll();
  };

  return (
    <div id="form-modal" className="modal">
      <form onSubmit={onSubmit} className="card" style={{ margin: 0 }}>
        <h3 className="title-secondary">Add contact</h3>
        <label>
          Name
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
          Phone
          <input
            className="form-add-input"
            type="tel"
            name="phone"
            value={phone}
            onChange={onChange}
          />
        </label>
        <h5>Contact Type</h5>
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
                <span>Personal</span>
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
                <span>Professional</span>
              </label>
            </p>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Add contact"
            className="modal-close btn btn-block"
          />
        </div>
        {current && (
          <div>
            <button className="btn  btn-block grey" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
