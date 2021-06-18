import React from 'react'
import Footer from '../components/Footer/Footer'
import MyPortfolio from '../containers/MyPortfolio/MyPortfolio'
import { Helmet } from 'react-helmet'

const Portfolio = () => {
    return (
        <>
            <Helmet>
                <title>Project | Portfolio</title>
            </Helmet>
            <MyPortfolio />
            <Footer />
        </>
    )
}

export default Portfolio
