import React from "react";
import Landing from './components/landing';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
