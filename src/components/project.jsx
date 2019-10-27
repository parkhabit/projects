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
        
        <Link to={projectLink} className="link action-area">
        <span className="overline-2 dark-text">{overview}</span>
          <h3 className="heading-2-1 dark-text headingLink">{title}</h3>

          <span className="heading-6 dark-text">{description}</span>
          <p className="text dark-text h-20">{paragraph}</p>
          <img className="project-img" src={img} alt={imgAlt} />
          <div className='pt-1'>
            <hr className="divider-small" />
            <span className="underline dark-text">{skills}</span>
          </div>
          <hr className="divider-small-dark" />
        </Link>
      </div>
    );
  }
}

export default ProjectDetails;
