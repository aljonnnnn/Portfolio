import React from 'react'
import AboutMe from '../containers/AboutMe/AboutMe'
import Education from '../containers/Education/Education'
import Footer from '../components/Footer/Footer'
import Skills from '../containers/Skills/Skills'
import { Helmet } from 'react-helmet'


const About = () => {
    return (
        <>
            <Helmet>
                <title>About | Portfolio</title>
            </Helmet>
            <AboutMe />
            <Education />
            <Skills />
            <Footer />
        </>
    )
}

export default About
