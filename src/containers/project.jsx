import React from "react";
import "../style.css";

import Hero from "../components/hero";

class Project extends React.Component {
  render() {
    const {projectName} = this.props.match.params;
    return (
      <React.Fragment>
        <Hero sideTitle="Page 03" heading={`Project ${projectName}`} overline="project" />
        <section className="background-dark">

        </section>
      </React.Fragment>
    );
  }
}
export default Project;