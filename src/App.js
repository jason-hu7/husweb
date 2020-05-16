import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="content">
            <div>
              <h1>Jason Hu</h1>
              <p style={{ marginBottom: '4vh' }}>Data Scientist</p>
              <a href="https://github.com/jason-hu7" target="_blank" rel="noopener"
              ><img src={process.env.PUBLIC_URL+"/assets/GitHub-Mark.png"} className="button"
                /></a>
              <a
                href="https://www.linkedin.com/in/jason-hu-94378758/"
                target="_blank" rel="noopener"
              ><img src={process.env.PUBLIC_URL+"/assets/linkedin-logo.png"} className="button-li"
                /></a>
              <a href="mailto:dcjasonhu@gmail.com" target="_blank" rel="noopener"
              ><img src={process.env.PUBLIC_URL+"/assets/email-icon.png"} className="button"
                /></a>
            </div>
            <a className="pulse" href="#about">ˇ</a>
          </div>
        </header>

        <div className="me" id="about">
          <div className="content">
            <h2 style={{ marginBottom: '3vh' }}>about me</h2>
            <img src={process.env.PUBLIC_URL+"/assets/jason-cusco.jpg"} className="hu" />
            <p>Hi there! I am a data scientist and machine learning engineer.</p>
            <p>I know Python, C++, JavaScript, PyTorch, SQL.</p>
            <p>Specialization: computer vision, anomaly detection and time-series analysis</p>
            <p>Domain knowledge: oil & gas, utility, and rotating equipment</p>
            <p>
              <a href="mailto:dcjasonhu@gmail.com" id="email">get in touch </a>
           to work with me or chat!
        </p>
          </div>
        </div>

        <div className="portfolio" id="portfolio">
          <h2 style={{ marginBottom: '6vh' }}>my projects</h2>
          <div className="portfolio-card">
            <div className="card-front-planner">
              <h3>Image to Image Translation with Conditional-GAN</h3>
              <a href="http://cs230.stanford.edu/projects_spring_2018/reports/8289557.pdf" >
                <img src={process.env.PUBLIC_URL + "/assets/generated.png"} className="portfolio-card" />
              </a>
              <p style={{ fontSize: 16, marginTop: '0vh' }}>Best deep learning project in Stanford CS230 2018 Spring</p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <a href="https://github.com/jason-hu7/" target="_blank" rel="noopener"
          ><img src={process.env.PUBLIC_URL+"/assets/GitHub-Mark.png"} className="icon"
            /></a>
          <a href="https://www.linkedin.com/in/jason-hu-94378758/" target="_blank" rel="noopener"
          ><img src={process.env.PUBLIC_URL+"/assets/linkedin-logo.png"} className="icon-li"
            /></a>
          <a href="mailto:dcjasonhu@gmail.com" target="_blank" rel="noopener"
          ><img src={process.env.PUBLIC_URL+"/assets/email-icon.png"} className="icon"
            /></a>
          <p>Houston, TX</p>
        </footer>
      </div>
    );
  }
}

export default App;
