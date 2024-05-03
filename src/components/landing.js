import React, { Component } from "react";

export default class Landing extends Component {
    render() {
        return (
            <header className="header">
                <div className="content">
                    <div>
                        <h1>Jason Hu</h1>
                        <p style={{ marginBottom: "4vh" }}>Software Engineer</p>
                        <a
                            href="https://github.com/jason-hu7"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={process.env.PUBLIC_URL + "/assets/GitHub-Mark.png"}
                                className="button"
                                alt="github logo"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jason-hu-94378758/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={process.env.PUBLIC_URL + "/assets/linkedin-logo.png"}
                                className="button-li"
                                alt="linkedin logo"
                            />
                        </a>
                        <a
                            href="mailto:dcjasonhu@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={process.env.PUBLIC_URL + "/assets/email-icon.png"}
                                className="button"
                                alt="email icon"
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
