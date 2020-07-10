import React from "react";

const Spinner = () => {
  return (
    <div className="spinner-wrapper">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
