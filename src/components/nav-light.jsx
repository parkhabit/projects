import React from "react";
import "./nav.css";
import "../style.css";
import { Link } from "react-router-dom";
// TODO: the link isnt loading from react-router-dom properly
class Nav extends React.Component {


  render() {
    return (
      <div className={`nav-background-light nav`}>
        <ul>
          <Link to='/'>home</Link>
        </ul>
        <ul>
          <Link to='/'>work</Link>
          <Link to='/'>values</Link>
          <Link to='/'>contact</Link>
        </ul>
      </div>
    );
  }
}
export default Nav;
