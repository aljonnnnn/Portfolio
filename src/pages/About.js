import React from "react";
import AboutMe from "../containers/AboutMe/AboutMe";
import Education from "../containers/Education/Education";
import Footer from "../components/Footer/Footer";
import Skills from "../containers/Skills/Skills";
import ReactHelmet from "../components/ReactHelmet/ReactHelmet";

const About = () => {
  return (
    <>
      <ReactHelmet title="About" />
      <AboutMe />
      <Education />
      <Skills />
      <Footer />
    </>
  );
};

export default About;
