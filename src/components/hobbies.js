import React, { Component } from "react";

export default class Hobbies extends Component {
  render() {
    return (
      <div className="me" id="hobbies">
        <div className="content">
          <h2 style={{ marginBottom: "3vh" }}>Hobbies</h2>
          <img
            src={process.env.PUBLIC_URL + "/assets/jason-cusco.jpg"}
            alt="jason cusco"
          />
          <p>Hi there! I am a data scientist and machine learning engineer.</p>
          <p>I know Python, C++, JavaScript, PyTorch, SQL, Bash, Git and MongoDB</p>
          <p>
            Specialization: computer vision, anomaly detection and time-series
            analysis
          </p>
          <p>Domain knowledge: oil & gas, utility, and rotating equipment</p>
        </div>
      </div>
    );
  }
}
