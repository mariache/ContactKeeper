import React from "react";
import Contacts from "../contacts/Contacts";

const Home = () => {
  return (
    <div className="grid-2">
      <div>{/**contact form */}</div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
