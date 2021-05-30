import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import {portfolioData} from './myPortfolioData'
// import './portfolio.scss'
import {
    PortfolioSection,
    SectionHeading,
    FlexLayout
} from './myPortfolioElements'

const MyPortfolio = () => {
    return (
        <PortfolioSection id="portfolio">
            <div className="container">
                <SectionHeading>{portfolioData.title}</SectionHeading>
                <FlexLayout>
                    <ProjectCard />
                </FlexLayout>
            </div>
        </PortfolioSection>
    )
}

export default MyPortfolio
