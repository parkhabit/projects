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

  componentDidMount() {
    console.log(this.props)
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
          <div className="navigation-top d-flex justify-end">
            <span role="button" className="d-flex" onClick={this.handleOpen}>
              <img src={MenuButton} alt="menu button" />
            </span>
          </div>
        )}
        {isOpen && (
          <nav className="background-light h100 overlay d-flex direction-col">
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
                  <p className='overline-2 dark-text'>Intro</p>
                  <h3 className={`${page === 'home' && 'strikethrough'} heading-3 dark-text`}>Kitty Allen</h3>
                </Link>
              </li>
              <li className="d-flex">
                <Link to="/about" className="link" onClick={this.handleClose}>
                  <p className="overline-2 dark-text">01</p>
                  <h3 className={`heading-3 dark-text ${page === 'about' && 'strikethrough'}`}>About</h3>
                </Link>
              </li>
              <li className="d-flex">
                <Link to="/work" className="link" onClick={this.handleClose}>
                  <p className="overline-2 dark-text">03</p>
                  <h3 className={`heading-3 dark-text ${page === 'work' && 'strikethrough'}`}>Work</h3>
                </Link>
              </li>
              <li className="d-flex">
                <Link to="/contact" className="link" onClick={this.handleClose}>
                  <p className="overline-2 dark-text">04</p>
                  <h3 className={`heading-3 dark-text ${page === 'contact' && 'strikethrough'}`}>Contact</h3>
                </Link>
              </li>
            </ul>
            <span className="divider-dark" />
          </nav>
        )}
      </React.Fragment>
    );
  }
}
export default Nav;
