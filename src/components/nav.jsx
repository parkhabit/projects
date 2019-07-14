import React from "react";
import "../style.css";
import ExitButton from "../assets/exitButton.svg";
import MenuButton from "../assets/menuButton.svg";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ isOpen: true });
  }

  handleClose() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    const { page } = this.props;
    return (
      <React.Fragment>
        {!isOpen && (
          <div className="navigation-top d-flex justify-end d-lg-none">
            <span role="button" className="d-flex" onClick={this.handleOpen}>
              <img src={MenuButton} alt="menu button" />
            </span>
          </div>
        )}
        {isOpen && (
          <nav className="background-light h100 overlay d-flex direction-col d-lg-none">
            <span
              role="button"
              onClick={this.handleClose}
              className="exit d-flex"
            >
              <img src={ExitButton} alt="exit button" />
            </span>
            <span className="divider-dark" />
            <ul>
              <li className="d-flex">
                <Link to="/" className="link" onClick={this.handleClose}>
                  <p className="overline-2 dark-text">Intro</p>
                  <h3
                    className={`${page === "home" &&
                      "strikethrough"} heading-3 dark-text`}
                  >
                    Kitty Allen
                  </h3>
                </Link>
              </li>
              <li className="d-flex">
                <Link to="/about" className="link" onClick={this.handleClose}>
                  <p className="overline-2 dark-text">01</p>
                  <h3
                    className={`heading-3 dark-text ${page === "about" &&
                      "strikethrough"}`}
                  >
                    About
                  </h3>
                </Link>
              </li>
              <li className="d-flex">
                <Link to="/work" className="link" onClick={this.handleClose}>
                  <p className="overline-2 dark-text">03</p>
                  <h3
                    className={`heading-3 dark-text ${page === "work" &&
                      "strikethrough"}`}
                  >
                    Work
                  </h3>
                </Link>
              </li>
              <li className="d-flex">
                <Link to="/contact" className="link" onClick={this.handleClose}>
                  <p className="overline-2 dark-text">04</p>
                  <h3
                    className={`heading-3 dark-text ${page === "contact" &&
                      "strikethrough"}`}
                  >
                    Contact
                  </h3>
                </Link>
              </li>
            </ul>
            <span className="divider-dark" />
          </nav>
        )}
        <div className="d-lg-flex justify-between background-dark d-none">
          <ul className="d-flex direction-col">
            <Link to='/'>
              <span className={`${page === 'home' ? 'divider-light' : 'divider-darker'}`} />
              <p className="heading-6">Home</p>
            </Link>
          </ul>
          <ul className="d-flex">
            <Link to='/about'>
              <span className={`${page === 'about' ? 'divider-light' : 'divider-darker'}`} />
              <p className="heading-6">About</p>
              <p className="text">A few sentences describing stuff</p>
            </Link>
            <Link to='/work'>
              <span className={`${page === 'work' ? 'divider-light' : 'divider-darker'}`} />
              <p className="heading-6">Work</p>
              <p className="text">A few sentences describing stuff</p>
            </Link>
            <Link to='/contact'>
              <span className={`${page === 'contact' ? 'divider-light' : 'divider-darker'}`} />
              <p className="heading-6">Contact</p>
              <p className="text">A few sentences describing stuff</p>
            </Link>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default Nav;
