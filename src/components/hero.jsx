import React, { Component } from "react";
import "../style.css";

class Hero extends Component {
  render() {
    const { sideTitle, heading, overline } = this.props;
    return (
      <React.Fragment>
        <div className="background-dark">
            <hr className="divider-light d-lg-none" />
            <div className="img-spacing">
              <span className="overline-intro">{sideTitle}</span>
            </div>
            <h1 className="heading-1">{heading}</h1>
            <h3 className="overline-1">{overline}</h3>
          </div>
      </React.Fragment>
    );
  }
}

export default Hero;
