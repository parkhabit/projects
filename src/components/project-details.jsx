import React, { Component } from "react";
import "../style.css";
import { Link } from "react-router-dom";

class ProjectDetails extends Component {
  render() {
    const {
      overview,
      projectLink,
      title,
      description,
      paragraph,
      img,
      imgAlt,
      skills
    } = this.props;
    return (
      <div className="w-30">
        <span className="overline-2 dark-text">{overview}</span>
        <Link to={projectLink} className="link action-area">
          <h2 className="heading-2 dark-text headingLink">{title}</h2>

          <span className="heading-6 dark-text">{description}</span>
          <p className="text dark-text">{paragraph}</p>
          <img className="project-img" src={img} alt={imgAlt} />
          <div>
            <hr className="divider-small" />
            <span className="underline dark-text">{skills}</span>
          </div>
          <hr className="divider-light" />
        </Link>
      </div>
    );
  }
}

export default ProjectDetails;
