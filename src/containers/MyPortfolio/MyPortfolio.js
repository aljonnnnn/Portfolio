import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import {portfolioData} from '../../Data/data'

const MyPortfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <h2 className="section-heading">{portfolioData.title}</h2>
                <div className="portfolio__flex">
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
}

export default MyPortfolio
