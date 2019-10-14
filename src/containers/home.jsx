import React, { Component } from "react";
import "../style.css";
import Hero from "../components/hero";
import { Link } from "react-router-dom";
import ProjectDetails from "../components/project-details";
import placeholder from "../assets/placeholder.jpg";
import arrowRight from "../assets/arrow-right.png";
import github from "../assets/github.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero
          sideTitle="Intro"
          heading="Kitty Allen"
          overline="Hi, my name is Kitty. I'm a digital designer/developer working in London."
        />
        <section className="background-light">
          <span className="overline-1 dark-text">Values</span>
          <h3 className="heading-2 dark-text">How I work</h3>
          <div className='d-flex flex-wrap'>
            <span className='w-30' />
            <article className='w-30'>
              <hr className="divider-dark" />
              <span className="overline-number dark-text">01</span>
              <h5 className="heading-4 dark-text">Diversity matters</h5>
              <p className="text dark-text">
                This is some information. It describes the kind of things I care
                about. The values that I have and maybe it's in relation to how
                I work as a developer but not essentially about coding in
                particular.
              </p>
            </article>
            <article className='w-30'>
              <hr className="divider-dark" />
              <span className="overline-number dark-text">02</span>
              <h5 className="heading-4 dark-text">Accessibility for all</h5>
              <p className="text dark-text">
                This is some information. It describes the kind of things I care
                about. The values that I have and maybe it's in relation to how
                I work as a developer but not essentially about coding in
                particular.
              </p>
            </article>
            <article className='w-30'>
              <hr className="divider-dark" />
              <span className="overline-number dark-text">03</span>
              <h5 className="heading-4 dark-text">Sharing is caring</h5>
              <p className="text dark-text">
                This is some information. It describes the kind of things I care
                about. The values that I have and maybe it's in relation to how
                I work as a developer but not essentially about coding in
                particular.
              </p>
            </article>
            <article className='w-30'>
              <hr className="divider-dark" />
              <span className="overline-number dark-text">04</span>
              <h5 className="heading-4 dark-text">User is key</h5>
              <p className="text dark-text">
                This is some information. It describes the kind of things I care
                about. The values that I have and maybe it's in relation to how
                I work as a developer but not essentially about coding in
                particular.
              </p>
            </article>
          </div>
        </section>
        <section className="background-semi-dark">
        <span className="overline-1">Blog</span>
          <h3 className="heading-2">What I write</h3>
          <article>
            <p className="heading-4">3rd March, 2019</p>
            <Link to='article/1'>
              <h3 className="heading-2 underlined">Title of the first blog</h3>
            </Link>
            <p className="heading-4">Building in accessibility is super important. I write about this in an article for medium.</p>
          </article>
          <article>
            <p className="heading-4">3rd March, 2019</p>
            <Link to='article/2'>
            <h3 className="heading-2 underlined">Title of the first blog</h3>
            </Link>
            <p className="heading-4">Building in accessibility is super important. I write about this in an article for medium.</p>
          </article>
          <article>
            <p className="heading-4">3rd March, 2019</p>
            <Link to='article/3'>
            <h3 className="heading-2 underlined">Title of the first blog</h3>
            </Link>
            <p className="heading-4">Building in accessibility is super important. I write about this in an article for medium.</p>
          </article>
        </section>
        <section className="background-light d-flex flex-wrap justify-between">
          <ProjectDetails
            overview="Overview"
            projectLink="project/1"
            title="Skill Share"
            description="Internal work website"
            paragraph="Conceptualised at a work hack-day. The purpose being to encourage colleagues to share their skills and knowledge in the workplace. By encouraging a peer-to-peer learning method a more open and interested workplace culture can emerge."
            img={placeholder}
            imgAlt="placeholder"
            skills="Design, React, Airtable"
          />

          <ProjectDetails
            overview="Overview"
            projectLink="project/2"
            title="Design System"
            description="Creating a design system"
            paragraph="My major learnings from creating a design system within Reed.co.uk, how to take what we had and put it together to form some unified ideas."
            img={placeholder}
            imgAlt="placeholder"
            skills="Project 2"
          />

          <ProjectDetails
            overview="Overview"
            projectLink="project/3"
            title="Third Project"
            description="How I think"
            paragraph="Short statement, few words. But more than that just a little bit of information about the project and why I built it."
            img={placeholder}
            imgAlt="placeholder"
            skills="Project 3"
          />
          <div>
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
          </div>
        </section>
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

        </section>
      </React.Fragment>
    );
  }
}

export default Home;
