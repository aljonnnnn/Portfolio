import { ReactHelmet, Footer } from '../components'
import { Education, AboutMe, Skills } from "../containers";

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
