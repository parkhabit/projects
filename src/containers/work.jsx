import React from "react";
import "../style.css";
import placeholder from "../assets/placeholder.jpg";
import arrowRight from "../assets/arrow-right.png";
import Hero from "../components/hero";
import Footer from "../components/footer";
import ProjectDetails from "../components/project-details";
import Nav from "../components/nav";

class Work extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav page='work' />
        <Hero sideTitle="Page 02" heading="Work" overline="Projects." />
        <section className="background-dark">
          <h4 className="overline-2">Overview</h4>
          <p className="heading-5">
            This is some information about why I've included my projects here.
            It is an overview of what this portfolio is. This is some
            information. It is an overview of what this portfolio is. This is
            some information. It is an overview of what this portfolio is.
          </p>
        </section>
        <main className="background-light">
          <ProjectDetails
            overview="Overview"
            projectLink=""
            title="Skill Share"
            description="Internal work website"
            paragraph="An idea conceptualised at a work hack-day. The purpose being to encourage colleagues to share their skills and knowledge in the workplace. By encouraging a peer-to-peer learning method a more open and interested workplace culture can emerge."
            img={placeholder}
            imgAlt="placeholder"
            skills="Design, React, Airtable"
          />

          <ProjectDetails
            overview="Overview"
            projectLink="second-project"
            title="Second Project"
            description="How I think"
            paragraph="Short statement, few words. But more than that just a little bit of information about the project and why I built it."
            img={placeholder}
            imgAlt="placeholder"
            skills="Project 2"
          />

          <ProjectDetails
            overview="Overview"
            projectLink="third-project"
            title="Third Project"
            description="How I think"
            paragraph="Short statement, few words. But more than that just a little bit of information about the project and why I built it."
            img={placeholder}
            imgAlt="placeholder"
            skills="Project 3"
          />

          <hr className="divider-small" />
          <h4 className="heading-3 dark-text inline">Want to see more?</h4>
          <p className="text dark-text">
            Check out my GitHub
            <br />
            for other past projects.
          </p>
          <a href="https://www.github.com/parkhabit">
            <button className="dark-button">
              See more
              <img src={arrowRight} alt="arrow" />
            </button>
          </a>
        </main>

        <Footer
          linkLeftTo="/about"
          linkLeftText="About"
          linkRightTo="/contact"
          linkRightText="Contact"
        />
      </React.Fragment>
    );
  }
}
export default Work;
