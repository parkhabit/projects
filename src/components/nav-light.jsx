import React from "react";
import "./nav.css";
import "../style.css";
import { HashLink as Link } from 'react-router-hash-link';
class Nav extends React.Component {


  render() {
    return (
      <nav className={`nav-background-light nav`}>
        <ul>
          <Link to='/' className='text-color-dark'>home</Link>
        </ul>
        <ul>
          <Link to='/#work' className='text-color-dark'>work</Link>
          <Link to='/#values' className='text-color-dark'>values</Link>
          <Link to='/#contact' className='text-color-dark'>contact</Link>
        </ul>
      </nav>
    );
  }
}
export default Nav;
