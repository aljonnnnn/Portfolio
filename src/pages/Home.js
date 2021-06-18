import React from 'react'
import Hero from '../containers/Home/Hero'
import { Helmet } from 'react-helmet'
const Home = () => {
    
    return (
        <>
            <Helmet>
                <title>Aljon De Lumen | Portfolio</title>
            </Helmet>
            <Hero />
        </>
    )
}

export default Home
