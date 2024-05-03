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
                                Python, C++, JavaScript, SQL
                            </dd>
                            <dt>Frameworks</dt>
                            <dd className="skillText">React, VueJs, Flask</dd>
                            <dt>Tools</dt>
                            <dd className="skillText">
                                Git, Bash, Vim, tmux, Kubernetes, RabbitMQ
                            </dd>
                            <dt>Platforms</dt>
                            <dd className="skillText">
                                AWS, Google Cloud, Auth0, Snowflake
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
