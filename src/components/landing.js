import React, { Component } from "react";
import App from "../App";

export default class Landing extends Component {
  render() {
    return (
      <header className="header">
        <div className="content">
          <div>
            <h1>Jason Hu</h1>
            <p style={{ marginBottom: "4vh" }}>Data Scientist</p>
            <a
              href="https://github.com/jason-hu7"
              target="_blank"
              rel="noopener"
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/GitHub-Mark.png"}
                className="button"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jason-hu-94378758/"
              target="_blank"
              rel="noopener"
            >
              <img
                src={process.env.PUBLIC_URL + "/assets/linkedin-logo.png"}
                className="button-li"
              />
            </a>
            <a href="mailto:dcjasonhu@gmail.com" target="_blank" rel="noopener">
              <img
                src={process.env.PUBLIC_URL + "/assets/email-icon.png"}
                className="button"
              />
            </a>
          </div>
          <a className="pulse" href="#about">
            ˇ
          </a>
        </div>
      </header>
    );
  }
}