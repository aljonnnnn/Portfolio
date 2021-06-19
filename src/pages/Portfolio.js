import React from 'react'
import Footer from '../components/Footer/Footer'
import MyPortfolio from '../containers/MyPortfolio/MyPortfolio'
import ReactHelmet from '../components/ReactHelmet/ReactHelmet'

const Portfolio = () => {
    return (
        <>
            <ReactHelmet title='Projects' />
            <MyPortfolio />
            <Footer />
        </>
    )
}

export default Portfolio
