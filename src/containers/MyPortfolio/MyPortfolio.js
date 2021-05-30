import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import {portfolioData} from './myPortfolioData'
import './portfolio.scss'
import {
    PortfolioSection,
    PortfolioSectionHeading,
    PortfolioFlex
} from './myPortfolioElements'

const MyPortfolio = () => {
    return (
        <PortfolioSection id="portfolio">
            <div className="container">
                <PortfolioSectionHeading>{portfolioData.title}</PortfolioSectionHeading>
                <PortfolioFlex>
                    <ProjectCard />
                </PortfolioFlex>
            </div>
        </PortfolioSection>
    )
}

export default MyPortfolio
