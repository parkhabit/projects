import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import arrowRight from "../assets/arrow-right.png";
import arrowLeft from "../assets/arrow-left.png";

class Footer extends React.Component {
  render() {
    const { linkLeftTo, linkLeftText, linkRightTo, linkRightText } = this.props;
    return (
      <div className="navigation-bottom">
        {linkLeftTo ? (
          <Link to={linkLeftTo} className="link">
            <img src={arrowLeft} alt="arrow" className="arrow-icon" />
            {linkLeftText}
          </Link>
        ) : (
          <span />
        )}
        {linkRightTo ? (
          <Link to={linkRightTo} className="link">
            {linkRightText}
            <img src={arrowRight} alt="arrow" className="arrow-icon" />
          </Link>
        ) : (
          <span />
        )}
      </div>
    );
  }
}
export default Footer;
