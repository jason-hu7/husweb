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
                            Hi there! I am an experienced engineer with a strong academic foundation from
                            Stanford University and substantial professional experience across different data fields.
                        </p>
                        <p>
                            I started out my professional career working as a data scientist, and honed my data science
                            modeling and software engineering skills through real-life projects. I have worked
                            on projects in sectors including renewable energy, utility, defense and oil&gas. In the recent
                            years I mainly worked as a full stack software engineer, developing applications using Python,
                            Flask, Javascript, VueJs, Postgres, RabbitMQ, and Kubernetes. I have worked on both GCP and AWS
                            in the past, and are familiar with the services provided by the two platforms.
                        </p>
                        <p>
                            I speak English and 中文 with bilingual proficiency. También hablo un poquito español.
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
