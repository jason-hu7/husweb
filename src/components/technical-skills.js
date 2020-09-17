import React, { Component } from "react";

export default class TechSkills extends Component {
  render() {
    return (
      <div className="skills" id="techskills">
        <h2 style={{ marginBottom: "2vh" }}>Technical Skills</h2>
        <div className="threesplits">
          <div className="left-third">
            <h3>Software Engineering</h3>
            <dl>
              <dt>Languages</dt>
              <dd className="skillText">
                Python, C++, JavaScript, MATLAB, SQL, HTML, CSS
              </dd>
              <dt>Frameworks</dt>
              <dd className="skillText">React, Flask, Spark</dd>
              <dt>Tools</dt>
              <dd className="skillText">
                Git, Bash, Vim (I love Vim, and I hate Vim), tmux, MongoDB, AWS,
                Google Cloud
              </dd>
            </dl>
          </div>
          <div className="mid-third">
            <h3>Data Science</h3>
            <dl>
              <dt>Deep Learning Frameworks</dt>
              <dd className="skillText">
                PyTorch (preferred), Tensorflow (only when have to)
              </dd>
              <dt>Specializations</dt>
              <dd className="skillText">
                Computer vision, anomaly detection, time-series analysis,
                geospatial analysis
              </dd>
            </dl>
          </div>
          <div className="right-third">
            <h3>Domain-Specific</h3>
            <dl>
              <dt>Energy</dt>
              <dd className="skillText">
                Renewable energy, oil & gas, utility
              </dd>
              <dt>Industrial Equipment</dt>
              <dd className="skillText">Generator, pump, compressor</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}
