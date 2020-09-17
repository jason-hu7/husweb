import React from "react";
import Landing from './components/landing';
import About from './components/about';
import TechSkills from './components/technical-skills'
import Hobbies from './components/hobbies';
import Projects from './components/projects';
import Footer from './components/footer';
// import BlogOverview from './components/strava-dash'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <About />
        <TechSkills />
        {/* <Hobbies /> */}
        <Projects />
        <Footer />
        {/* <BlogOverview /> */}
      </div>
    );
  }
}

export default App;
