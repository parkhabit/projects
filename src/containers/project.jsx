import React from "react";
import "../style.css";
import Nav from '../components/nav';

class Project extends React.Component {
  render() {
    const {projectName} = this.props.match.params;
    return (
      <React.Fragment>
        <Nav background='white'/>
        <p>{projectName}</p>
        <section className="background-dark">

        </section>
      </React.Fragment>
    );
  }
}
export default Project;