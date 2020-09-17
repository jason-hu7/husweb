import React, { Component } from "react";

export default class TechSkills extends Component {
  render() {
    return (
      <div className="skills" id="techskills">
        <h2 style={{ marginBottom: "2vh" }}>Technical Skills</h2>
        <div className="threesplits">
          <div className="left-third">
            <h2>Software Engineering</h2>
            <dl>
              <dt>Languages</dt>
              <dd>Python, C++, JavaScript, MATLAB, SQL, HTML, CSS</dd>
              <dt>Web Frameworks</dt>
              <dd>React, Flask</dd>
              <dt>Tools</dt>
              <dd>Git, Bash, SamIam, MongoDB</dd>
            </dl>
          </div>
          <div className="mid-third">
            <h2>Data Science</h2>
            <dl>
              <dt>Deep Learning Frameworks</dt>
              <dd>PyTorch (preferred), Tensorflow (only when have to)</dd>
              <dt>Specialization</dt>
              <dd>Computer vision, anomaly detection, time-series analysis</dd>
            </dl>
          </div>
          <div className="right-third">
            <h2>Domain-Specific</h2>
            <dl>
              <dt>Domain Knowledge</dt>
              <dd>Energy, utility, and rotating equipment</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}
