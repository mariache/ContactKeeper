import React from "react";
import {PagesLabels} from "./Labels";

const About = () => {
  return (
    <div>
      <h1>{PagesLabels.aboutTheApp}</h1>
      <p className="my-1">
        {PagesLabels.aboutTheAppDescr}
      </p>
      <p className="bg-dark p">
        <strong>{PagesLabels.version}: </strong>{PagesLabels.versionNumber}
      </p>
    </div>
  );
};

export default About;
