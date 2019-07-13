import React, { Component } from "react";
import "../style.css";
import pizza from "../assets/Pizza.png";

class Hero extends Component {
  render() {
    const { sideTitle, heading, overline } = this.props;
    return (
      <React.Fragment>
        <div className="background-dark">
          <div className="h100">
            <hr className="divider-light" />
            <div className="img-spacing">
              <span className="overline-intro">{sideTitle}</span>
              <img src={pizza} alt="pizza icon" />
            </div>
            <h1 className="heading-1">{heading}</h1>
            <h3 className="overline-1">{overline}</h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Hero;
