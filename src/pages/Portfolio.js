import React, { Component } from "react";
import BoxPic from "../components/BoxPic";
import  "../css/Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <h1>Portfolio</h1>
        <div>
          <div>
            <p>main box</p>
          </div>
          <div>
            <div>
              
                <BoxPic pic={require("../assets/images/laserlights.jpg")} href="https://vanwykkim.github.io/semantic-markup/" />
              
            </div>
            <div>
              <p>box2</p>
            </div>
            <div>
              <p>box3</p>
            </div>
            <div>
              <p>box4</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
