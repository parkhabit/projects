import React, { Component } from "react";
import "../style.css";
import Hero from "../components/hero";
import Nav from "../components/nav";
import { Link } from "react-router-dom";
import ProjectDetails from "../components/project-details";
import placeholder from "../assets/placeholder.jpg";
import arrowRight from "../assets/arrow-right.png";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav background="black"/>
        <Hero
          id="home"
          sideTitle="Intro"
          heading="Kitty Allen"
          overline="Hi, my name is Kitty. I'm a digital designer/developer working in London."
        />
        <section className="background-light d-flex flex-wrap justify-between top-curtain" id='work'>
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
        <section className="background-semi-dark top-curtain">
          <span className="overline-1">Blog</span>
          <h3 className="heading-2">What I write</h3>

          <div className="w-lg-80 h-lg-100">
            <article className="d-lg-flex justify-around-lg margin-md">
              <p className="overline">3rd March, 2019</p>
              <div>
                <Link to="article/1">
                  <h3 className="heading-2 underlined">
                    Title of the first blog
                  </h3>
                </Link>
                <p className="heading-4">
                  Building in accessibility is super important. I write about
                  this in an article for medium.
                </p>
              </div>
            </article>
            <article className="d-lg-flex justify-around-lg margin-md">
              <p className="overline">3rd March, 2019</p>
              <div>
                <Link to="article/2">
                  <h3 className="heading-2 underlined">
                    Title of the first blog
                  </h3>
                </Link>
                <p className="heading-4">
                  Building in accessibility is super important. I write about
                  this in an article for medium.
                </p>
              </div>
            </article>
            <article className="d-lg-flex justify-around-lg margin-md">
              <p className="overline">3rd March, 2019</p>
              <div>
                <Link to="article/3">
                  <h3 className="heading-2 underlined">
                    Title of the first blog
                  </h3>
                </Link>
                <p className="heading-4">
                  Building in accessibility is super important. I write about
                  this in an article for medium.
                </p>
              </div>
            </article>
          </div>
        </section>

        <div className="reveal-main"></div>
        <section className="background-light bottom-curtain" id='values'>
          <span className="overline-1 dark-text">Values</span>
          <h3 className="heading-2 dark-text">How I work</h3>
          <div className="d-flex flex-wrap">
            <span className="w-30" />
            <article className="w-30">
              <hr className="divider-dark" />
              <span className="overline-number dark-text">01</span>
              <h5 className="heading-4 dark-text">The user is key</h5>
              <p className="text dark-text">
                I am a problem solver, I love to code and fix issues, but the
                key issue I'm fixing is always for someone, the user. Whatever
                I'm creating, whether it be an experience, a feature, or a
                website it must benefit the user.
              </p>
            </article>
            <article className="w-30">
              <hr className="divider-dark" />
              <span className="overline-number dark-text">02</span>
              <h5 className="heading-4 dark-text">Inclusivity</h5>
              <p className="text dark-text">
                From the culture of the office I work in, to the users I
                consider, inclusivity is at the core of what I do. I consider
                myself to by an A11y and will encourage all workplaces that I am
                a part of to design and write code with accessibility in mind.
              </p>
            </article>
            <article className="w-30">
              <hr className="divider-dark" />
              <span className="overline-number dark-text">03</span>
              <h5 className="heading-4 dark-text">Ethical design</h5>
              <p className="text dark-text">
                I believe that creating digital proucts is a privelidge that
                comes with responsibilities to first do no harm. I want to be a
                part of making digital products that affect positive changes in
                the world.
              </p>
            </article>
            <article className="w-30">
              <hr className="divider-dark" />
              <span className="overline-number dark-text">04</span>
              <h5 className="heading-4 dark-text">Collaboration</h5>
              <p className="text dark-text">
                The best products are made by working collaboratively with a
                myriad of different voices and opinions. I regularly add my
                voice to the tech/deisgn scene by holding brown bag sessions in
                my workplace, through articles I post on Medium, and general
                ramblings on twitter.
              </p>
            </article>
          </div>
        </section>

        <Hero
          id="contact"
          heading="Say hi"
          overline="Email me at kallen91@gmail.com"
        />
      </React.Fragment>
    );
  }
}

export default Home;
