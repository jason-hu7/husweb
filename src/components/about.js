import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="me" id="about">
        <div className="content">
          <h2 style={{ marginBottom: "3vh" }}>About Me</h2>
          <img
            src={process.env.PUBLIC_URL + "/assets/jason-cusco.jpg"}
            className="hu"
          />
          <p>Hi there! I am a data scientist and machine learning engineer</p>
          <p>I know Python, C++, JavaScript, PyTorch, SQL, Bash and Git</p>
          <p>
            Specialization: computer vision, anomaly detection and time-series
            analysis
          </p>
          <p>Domain knowledge: oil & gas, utility, and rotating equipment</p>
          <p>
            <a href="mailto:dcjasonhu@gmail.com" id="email">
              get in touch{" "}
            </a>
            to work with me or chat!
          </p>
        </div>
      </div>
    );
  }
}
