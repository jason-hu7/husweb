import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="https://github.com/jason-hu7/" target="_blank" rel="noopener noreferrer">
          <img
            src={process.env.PUBLIC_URL + "/assets/GitHub-Mark.png"}
            className="icon"
            alt="github icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jason-hu-94378758/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/linkedin-logo.png"}
            className="icon-li"
            alt="linkedin logo"
          />
        </a>
        <a href="mailto:dcjasonhu@gmail.com" target="_blank" rel="noopener noreferrer">
          <img
            src={process.env.PUBLIC_URL + "/assets/email-icon.png"}
            className="icon"
            alt="email icon"
          />
        </a>
        <p>Houston, TX</p>
      </footer>
    );
  }
}
