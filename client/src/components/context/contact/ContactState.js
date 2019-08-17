import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 6,
        name: "S O",
        email: "omarbagaev@gmail.com",
        phone: "4533132505",
        type: "personal"
      },
      {
        id: 4,
        name: "S Omarbagaev",
        email: "omarbagaev@gmail.com",
        phone: "456 66 132505",
        type: "professional"
      }
    ]
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact

  //Delete contact

  //Set current contact

  //Clear Current contact

  //Update contact

  //Filter contatc

  //Clear Contact

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
