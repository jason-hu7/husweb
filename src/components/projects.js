import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div className="portfolio" id="portfolio">
        <h2 style={{ marginBottom: "6vh" }}>My Projects</h2>
        <div className="portfolio-card">
          <div className="card-front-planner">
            <h3>Image to Image Translation with Conditional-GAN</h3>
            <ul>
              <li>
                <a
                  href="http://cs230.stanford.edu/projects_spring_2018/reports/8289557.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  Report
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jason-hu7/230pix2pix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  GitHub
                </a>
              </li>
            </ul>
            <img
              src={process.env.PUBLIC_URL + "/assets/generated.png"}
              className="portfolio-card"
              alt="pix2pix"
            />
            <p style={{ fontSize: 16, marginTop: "0vh" }}>
              Best deep learning project in Stanford CS230 2018 Spring
            </p>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="card-front-planner">
            <h3>Analyzing Fractures With Time-Lapse Resistivity Data</h3>
            <ul>
              <li>
                <a
                  href="https://www.onepetro.org/conference-paper/SPE-196144-MS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  Publication
                </a>
              </li>
            </ul>
            <img
              src={process.env.PUBLIC_URL + "/assets/ms_thesis.png"}
              className="portfolio-card"
              alt="fracturing sim"
            />
            <p style={{ fontSize: 16, marginTop: "0vh" }}>
              Society of Petroleum Engineers International Student Paper Contest
              2nd Place
            </p>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="card-front-planner">
            <h3>
              Appliance-specific power usage classification and disaggregation
            </h3>
            <ul>
              <li>
                <a
                  href="http://cs229.stanford.edu/proj2017/final-reports/5244097.pdff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  Report
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jason-hu7/CS229-Group-Project---Team-Asia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  GitHub
                </a>
              </li>
            </ul>
            <img
              src={process.env.PUBLIC_URL + "/assets/229project.png"}
              className="portfolio-card"
              alt="power disaggregate"
            />
          </div>
        </div>
      </div>
    );
  }
}
