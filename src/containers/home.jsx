import React, { Component } from "react";
import "../style.css";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Nav from "../components/nav";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav page='home' />
        <Hero
          sideTitle="Intro"
          heading="Kitty Allen"
          overline="A portfolio website."
        />
        <main className="background-dark">
          <h4 className="overline-2">Overview</h4>
          <p className="heading-5">
            This is some information. It is an overview of what this portfolio
            is. This is some information. It is an overview of what this
            portfolio is. This is some information. It is an overview of what
            this portfolio is.
          </p>
          <p className="heading-5">
            It is an overview of what this portfolio is. It is an overview of
            what this portfolio is. It is an overview of what this portfolio is.
          </p>
        </main>
        <Footer linkRightTo="/about" linkRightText="About" />
      </React.Fragment>
    );
  }
}

export default Home;
