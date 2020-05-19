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
                  className="links"
                >
                  Report
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jason-hu7/230pix2pix"
                  target="_blank"
                  className="links"
                >
                  GitHub
                </a>
              </li>
            </ul>
            <img
              src={process.env.PUBLIC_URL + "/assets/generated.png"}
              className="portfolio-card"
            />
            <p style={{ fontSize: 16, marginTop: "0vh" }}>
              Best deep learning project in Stanford CS230 2018 Spring
            </p>
          </div>
        </div>
      </div>
    );
  }
}
