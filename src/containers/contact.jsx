import React from "react";
import "../style.css";
import github from "../assets/github.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Nav from "../components/nav";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav page='contact' />
        <Hero sideTitle="Page 03" heading="Call me" overline="Contact me via" />
        <section className="background-dark">
          <div>
            <img src={phone} alt="phone icon" />
            <h3 className="contact-text inline">+447490388067</h3>
          </div>
          <div>
            <img src={email} alt="envelope icon" />
            <h3 className="contact-text inline">parkhabit@gmail.com</h3>
          </div>
          <div>
            <img src={github} alt="github icon" />
            <h3 className="contact-text inline">github.com/parkhabit</h3>
          </div>

          <Footer linkLeftTo="/work" linkLeftText="Work" />
        </section>
      </React.Fragment>
    );
  }
}
export default Contact;
