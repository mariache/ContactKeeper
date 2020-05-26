import React, { useContext } from "react";
import ContactContext from "./../context/contact/contactContext";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };
  return (
    <div className="card" style={{ position: "relative" }}>
      <span
        style={{ position: "absolute", top: 1, right: 0 }}
        className={
          "badge " +
          (type === "professional" ? "badge-success" : "badge-primary")
        }
      >
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
      <h4 className=" text-left">{name}</h4>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open" />
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" />
            {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm red" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;
