import React from 'react'
import ContactMe from '../containers/ContactMe/ContactMe'
import Footer from '../components/Footer/Footer'
import { Helmet } from 'react-helmet'

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact | Portfolio</title>
            </Helmet>
            <ContactMe />
            <Footer />
        </>
    )
}

export default Contact
