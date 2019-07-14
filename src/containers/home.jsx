import React, { Component } from "react";
import "../style.css";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Nav from "../components/nav";
import IntroParagraph from '../components/intro-paragraph';

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
          <IntroParagraph 
            title='Overview'
            paragraph={['This is some information. It is an overview of what this portfolio is. This is some information. It is an overview of what thisportfolio is. This is some information. It is an overview of what this portfolio is.', 'It is an overview of what this portfolio is. It is an overview of what this portfolio is. It is an overview of what this portfolio is.']}
          />
        </main>
        <Footer linkRightTo="/about" linkRightText="About" />
      </React.Fragment>
    );
  }
}

export default Home;
