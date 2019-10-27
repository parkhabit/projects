import React from "react";
import "./nav.css";
import "../style.css";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    const { background } = this.props;
    let backgroundColor = "";
    let textcolor = "";
    if (background === "white") {
      backgroundColor = "nav-background-light";
      textcolor = "text-color-dark";
    } else {
      backgroundColor = "nav-background-dark";
    }
    return (
      <div className={`${backgroundColor} nav`}>
        <ul>
          <li>
            <Link
              to="home"
              className={textcolor}
              offset={-58}
              activeClass="active"
              smooth
            >
              home
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              to="work"
              className={textcolor}
              offset={-58}
              activeClass="active"
              smooth
            >
              work
            </Link>
          </li>
          <li>
            <Link
              to="values"
              className={textcolor}
              offset={-58}
              activeClass="active"
              smooth
            >
              values
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className={textcolor}
              offset={-58}
              activeClass="active"
              smooth
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Nav;
