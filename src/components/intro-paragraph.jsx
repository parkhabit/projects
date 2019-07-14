import React, { Component } from "react";
import "../style.css";

class IntroParagraph extends Component {
  render() {
    const { title, paragraph } = this.props;
    return (
      <React.Fragment>
          <h4 className="overline-2">{title}</h4>
          <p className="heading-5">{paragraph[0]}</p>
          {paragraph[1] && <p className="heading-5">{paragraph[1]}</p>}
      </React.Fragment>
    );
  }
}

export default IntroParagraph;
