import React from "react";
import "../style.css";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Nav from "../components/nav";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav page='about' />
        <Hero
          sideTitle="Page 01"
          heading="About"
          overline="A little about myself."
        />
        <section className="background-dark">
          <h4 className="overline-2">Overview</h4>
          <p className="heading-5">
            This is some information. It is an overview of what this portfolio
            is. This is some information. It is an overview of what this
            portfolio is. This is some information. It is an overview of what
            this portfolio is.
          </p>
        </section>
        <main className="background-light">
          <span className="overline-1 dark-text">Overline</span>
          <h3 className="heading-2 dark-text">How I work</h3>
          <hr className="divider-dark" />
          <span className="overline-number dark-text">01</span>
          <h5 className="heading-4 dark-text">Diversity matters</h5>
          <p className="text dark-text">
            This is some information. It describes the kind of things I care
            about. The values that I have and maybe it's in relation to how I
            work as a developer but not essentially about coding in particular.
          </p>
          <hr className="divider-dark" />
          <span className="overline-number dark-text">02</span>
          <h5 className="heading-4 dark-text">Accessibility for all</h5>
          <p className="text dark-text">
            This is some information. It describes the kind of things I care
            about. The values that I have and maybe it's in relation to how I
            work as a developer but not essentially about coding in particular.
          </p>
          <hr className="divider-dark" />
          <span className="overline-number dark-text">03</span>
          <h5 className="heading-4 dark-text">Sharing is caring</h5>
          <p className="text dark-text">
            This is some information. It describes the kind of things I care
            about. The values that I have and maybe it's in relation to how I
            work as a developer but not essentially about coding in particular.
          </p>
          <hr className="divider-dark" />
          <span className="overline-number dark-text">04</span>
          <h5 className="heading-4 dark-text">User is key</h5>
          <p className="text dark-text">
            This is some information. It describes the kind of things I care
            about. The values that I have and maybe it's in relation to how I
            work as a developer but not essentially about coding in particular.
          </p>
        </main>
        <Footer
          linkLeftTo="/"
          linkLeftText="Home"
          linkRightTo="work"
          linkRightText="Work"
        />
      </React.Fragment>
    );
  }
}
export default About;
