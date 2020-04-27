import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  // DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  // UPDATE_CONTACT,
  // FILTER_CONTACTS,
  // CLEAR_CONTACTS,
  // CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 6,
        name: "S O",
        email: "omarbagaev@gmail.com",
        phone: "4533132505",
        type: "personal",
      },
      {
        id: 4,
        name: "S Omarbagaev",
        email: "omarbagaev@gmail.com",
        phone: "456 66 132505",
        type: "professional",
      },
      {
        id: 23,
        name: "Sami Omari",
        email: "slvmlnkv@gmail.com",
        phone: "+76 66 132505",
        type: "professional",
      },
    ],
    current: null,
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = (contact) => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Clear Current contact

  //Update contact

  //Filter contatc

  //Clear Contact

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
