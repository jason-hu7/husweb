import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="me" id="about">
        <h2 style={{ marginBottom: "2vh" }}>About Me</h2>
        <div className="twosplits">
          <div className="left-half">
            <img
              src={process.env.PUBLIC_URL + "/assets/jason-cusco.jpg"}
              className="hu"
              alt="jason cusco"
            />
          </div>
          <div className="right-half">
            <p>
              Hi there! I am a data scientist with background in energy and B2B.
              While my bread and butter is machine learning & deep learning, I
              am also a competant software engineer that is fluent in modern
              development tools. Though never majored in computer science, I
              picked up a concept or two via online articles, code reviews and
              quality lunch time with my software engineer colleagues :)
            </p>
            <p>
              I hold a bachelor's degree in Petroleum Engineering from the
              <span className="redText">University of Houston</span> and a
              master's degree in energy resources engineering from{" "}
              <span className="redText">Stanford University</span>. I developed
              a passion for data science and computer science while studying at
              Stanford University, and took courses from experts including
              Andrew Ng, Fei-fei Li, and Jerome Freidman.
            </p>
            <p>
              I started working as a data scientsit at Arundo Analytics after
              school, and honed my data science and software engineering skills
              through real-life projects. For the past few years I have worked
              on projects in sectors including renewable energy, utility,
              defense and oil&gas.
            </p>
          </div>
        </div>
        <p>
          <a href="mailto:dcjasonhu@gmail.com" id="email">
            Get in touch{" "}
          </a>
          to work with me or chat!
        </p>
      </div>
    );
  }
}
