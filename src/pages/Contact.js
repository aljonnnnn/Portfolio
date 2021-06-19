import React from "react";
import ContactMe from "../containers/ContactMe/ContactMe";
import Footer from "../components/Footer/Footer";
import ReactHelmet from "../components/ReactHelmet/ReactHelmet";

const Contact = () => {
  return (
    <>
      <ReactHelmet title="Contact" />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Contact;
