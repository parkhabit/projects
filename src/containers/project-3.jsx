import React from "react";
import "../style.css";
import Nav from "../components/nav-light";
import placeholder from "../assets/placeholder.jpg";

class ProjectThree extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav background="white" />
        <main className="background-light no-padding">
          <img className="main-project-img" src={placeholder} alt="meow" />
          <article className="p1">
            <heading className="main-project-title">
              <span className="overline-2 dark-text">Design</span>
              <h1 className="heading-2-1 dark-text">
                Design Systems: using storybook to organise the site
              </h1>
            </heading>

            {/* <p className='heading-6 dark-text'>Kitty Allen 6th-Feb-2019</p> */}
            <div className="main-article">
              <h6 className="heading-3 dark-text m0">Some bold heading text</h6>
              <p className="text dark-text">
                Some regular text in paragraphs. is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Why do we use it? It is a
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <img className="main-project-img" src={placeholder} alt="meow" />
              <h6 className="heading-3 dark-text m0">Some bold heading text</h6>
              <p className="text dark-text">
                Some regular text in paragraphs. is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. Why do we use it? It is a
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <img className="main-project-img" src={placeholder} alt="meow" />
            </div>
          </article>
        </main>
      </React.Fragment>
    );
  }
}
export default ProjectThree;
