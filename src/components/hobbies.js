import React, { Component } from "react";

export default class Hobbies extends Component {
  render() {
    return (
      <div className="hobbies" id="hobbies">
        <h2 style={{ marginBottom: "2vh" }}>Hobbies</h2>
        <p style={{ margin: "0px 400px 50px 400px" }}>
          I enjoy being active when I am away from my laptops. I played
          basketball and soccer growing up, and now I mostly rock climb, bike,
          and swim. I enjoy learning physical skills just as much as I enjoy
          learning math and engineering skills! That being said, I love sinking
          in the chair with a good book and a cup of coffee. My recent favorites
          are{" "}
          <a
            href="https://www.goodreads.com/book/show/38412.Fermat_s_Enigma?ac=1&from_search=true&qid=BU6zX849FK&rank=1"
            className="inline-links"
          >
            Fermat's Enigma
          </a>{" "}
          and{" "}
          <a
            href="https://en.wikipedia.org/wiki/Remembrance_of_Earth%27s_Past"
            className="inline-links"
          >
            Remembrance of Earth's Past Trilogy
          </a>
          .
        </p>
        <p style={{ margin: "0px 400px 50px 400px" }}>
          Also, Nando's <span role="img" aria-label="chicken">🐓</span> is maybe probably possibly the best fast food in the
          world.
        </p>
        <div className="row">
          <div className="column">
            <img src={process.env.PUBLIC_URL + "/assets/cooking.jpg"} alt="cooking"/>
            <img src={process.env.PUBLIC_URL + "/assets/basketball.jpg"} alt="basketball"/>
          </div>
          <div className="column">
            <img src={process.env.PUBLIC_URL + "/assets/snowboarding.jpg"} alt="snowboarding"/>
            <img src={process.env.PUBLIC_URL + "/assets/nandos.jpg"} alt="nandos"/>
          </div>
          <div className="column">
            <img src={process.env.PUBLIC_URL + "/assets/climbing.jpg"} alt="outdoor climbing"/>
            <img src={process.env.PUBLIC_URL + "/assets/cycling.jpg"} alt="biking with ben"/>
          </div>
          <div className="column">
            <img src={process.env.PUBLIC_URL + "/assets/family.jpg"} alt="my fam"/>
            <img src={process.env.PUBLIC_URL + "/assets/motorcycle.jpg"} alt="motorcycle"/>
          </div>
        </div>
      </div>
    );
  }
}
