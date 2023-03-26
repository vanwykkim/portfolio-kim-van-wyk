import React from "react";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";

function Home(){
  
    return (
      <div className="Home">
        <AboutMe />
        <Portfolio />
        <ContactMe />
      </div>
    );
  
}

export default Home;
