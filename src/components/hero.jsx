import React, { Component } from "react";
import "../style.css";

class Hero extends Component {
  render() {
    const { sideTitle, heading, overline, id } = this.props;
    return (
      <React.Fragment>
        <div id={id} className="background-dark top-curtain">
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
